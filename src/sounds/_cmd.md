`for i in *.aif; do ffmpeg -i "$i" "${i%.*}.mp3"; done`