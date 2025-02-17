// @flow
import type { Fighter, Attack } from '../types/Fighter';
import type { FightStage } from '../types/Stage';
import React from 'react';
import classNames from 'classnames';
import PageContainer from './PageContainer';
import AnimatedText from './AnimatedText';
import Image from './Image';
import Title from './Title';
import styles from './FightPage.css';
import { Container, Progress } from 'nes-react';
import * as actions from '../redux/actions';
import { useDispatch } from '../redux/store';
import { useHotkeys } from 'react-hotkeys-hook';
import { vibesAreZero, vibesAreMax } from '../utils/fighting';
import { BAD_VIBES_MAX, OK_VIBES_MAX, GOOD_VIBES_MAX } from '../config/vibes';

export default function FightPage({ player, boss, attack }: FightStage) {
  const dispatch = useDispatch();

  const resetGame = () => dispatch(actions.resetGame());
  const clearAttack = () => dispatch(actions.clearAttack());

  const playerFirstAttack = () =>
    dispatch(actions.performPlayerAttack(player.currentAttacks[0]));
  const playerSecondAttack = () =>
    dispatch(actions.performPlayerAttack(player.currentAttacks[1]));
  const playerThirdAttack = () =>
    dispatch(actions.performPlayerAttack(player.currentAttacks[2]));

  const bossResponds = () => dispatch(actions.performBossAttack());

  const hurtPlayerVibes = () => dispatch(actions.hurtPlayerVibes());
  const boostPlayerVibes = () => dispatch(actions.boostPlayerVibes());

  const hurtBossVibes = () => dispatch(actions.hurtBossVibes());
  const boostBossVibes = () => dispatch(actions.boostBossVibes());

  useHotkeys('1', playerFirstAttack, [player.currentAttacks]);
  useHotkeys('2', playerSecondAttack, [player.currentAttacks]);
  useHotkeys('3', playerThirdAttack, [player.currentAttacks]);

  useHotkeys('=', bossResponds);

  useHotkeys('q', boostPlayerVibes);
  useHotkeys('w', hurtPlayerVibes);

  useHotkeys('[', hurtBossVibes);
  useHotkeys(']', boostBossVibes);

  useHotkeys('esc', resetGame);
  useHotkeys('enter', clearAttack);
  useHotkeys('space', clearAttack);
  useHotkeys('delete', clearAttack);
  useHotkeys('backspace', clearAttack);

  return (
    <PageContainer orientation="horizontal">
      <FighterSection fighter={player} imageWidth={100}>
        {player.currentAttacks.map((attack, i) => (
          // TODO: color attacks by types
          // TODO: more fun styling for these
          <Container
            key={i}
            centered
            dark
            title={`Attack ${i + 1}`}
            className={classNames(styles.attackItem, styles[attack.type])}
            onClick={() => dispatch(actions.performPlayerAttack(attack))}
          >
            {attack.name}
          </Container>
        ))}
      </FighterSection>
      <CenterSection />
      <FighterSection fighter={boss} flipped imageWidth={80}>
        {boss.facts.map(({ header, description }, i) => (
          <div className={styles.fact} key={i}>
            <div className={styles.factHeader}>{header}</div>
            <div className={styles.factDescription}>{description}</div>
          </div>
        ))}
      </FighterSection>
      {attack && <AttackModal attack={attack} clearAttack={clearAttack} />}
      {vibesAreZero(boss) && <ExclusionaryVictoryModal fighter={player} />}
      {vibesAreZero(player) && <ExclusionaryVictoryModal fighter={boss} />}
      {vibesAreMax(player) && vibesAreMax(boss) && (
        <InclusiveVictoryModal boss={boss} player={player} />
      )}
    </PageContainer>
  );
}

type FighterSectionProps = {
  fighter: Fighter,
  flipped?: boolean,
  imageWidth: number, // hacky but boss/player images are different sizes lol
  children?: React$Node,
};

function FighterSection({ children, imageWidth, fighter, flipped }: FighterSectionProps) {
  return (
    <div className={classNames(styles.fighterSection, flipped && styles.flipped)}>
      <div className={styles.vibesRow}>
        <div className={styles.fighterVibes}>
          <Progress
            value={fighter.vibes}
            max={GOOD_VIBES_MAX}
            {...getProgressProps(fighter.vibes)}
          />
        </div>
      </div>
      <div className={styles.fighterRow}>
        <Image
          className={styles.fighterImage}
          src={fighter.image}
          glow
          width={imageWidth}
        />
        <div className={styles.fighterInfo}>
          <div className={styles.fighterName}>{fighter.name}</div>
          <div className={styles.fighterTitle}>{fighter.title}</div>
        </div>
      </div>

      <div className={styles.weaponRow}>
        <div className={styles.weaponHeader}>WEAPON</div>
        <div className={styles.weaponInfo}>
          <Image className={styles.weaponImage} src={fighter.weapon.image} />
          <div className={styles.weaponName}>{fighter.weapon.name}</div>
        </div>
      </div>

      {children}
    </div>
  );
}

function CenterSection() {
  return (
    <div className={styles.centerSection}>
      <div className={styles.vibesText}>VIBES</div>
    </div>
  );
}

type AttackModalProps = {
  attack: Attack,
  clearAttack: () => mixed,
};

function AttackModal({ attack, clearAttack }: AttackModalProps) {
  return (
    <div className={styles.modalOverlay} onClick={clearAttack}>
      <div className={classNames(styles.modal, styles[attack.type])}>
        {/* TODO: add "drumroll" or some other delay before attack? */}
        {/* TODO: "player performs" or "boss performs" */}
        {/* TODO: fun animation here */}
        <Title>{attack.name}</Title>
      </div>
    </div>
  );
}

function ExclusionaryVictoryModal({ fighter }: { fighter: Fighter }) {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <Image width={200} height={200} glow src={fighter.image} />
        <AnimatedText colors={['#f88', '#ddd']} colorTransitionTime={200}>
          <Title>{fighter.name} Wins!</Title>
        </AnimatedText>
      </div>
    </div>
  );
}

function InclusiveVictoryModal({ player, boss }: { player: Fighter, boss: Fighter }) {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        {/* TODO: add "drumroll" or some other delay before attack? */}
        {/* TODO: "player performs" or "boss performs" */}
        {/* TODO: fun animation here */}
        <Image width={200} height={200} glow src={player.image} />
        <AnimatedText colors={['#88f', '#ddd']} colorTransitionTime={200}>
          <Title>Mutual Victory!</Title>
        </AnimatedText>
        <Image width={200} height={200} glow src={boss.image} />
      </div>
    </div>
  );
}

function getProgressProps(vibes: number) {
  if (vibes <= BAD_VIBES_MAX) return { error: true };
  if (vibes <= OK_VIBES_MAX) return { warning: true };
  if (vibes < GOOD_VIBES_MAX) return { success: true };
  return { primary: true };
}
