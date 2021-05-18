# https://apple.stackexchange.com/questions/100570/getting-all-files-from-a-web-page-using-curl
# wget -r -np -k

# read file
# https://www.javatpoint.com/bash-read-file

file='liblist.sh'  
  
i=1  
while read line; do  
  
#Reading each line  
echo "Fetching #$i : $line"
wget -r -np -k $line
i=$((i+1))  
done < $file  