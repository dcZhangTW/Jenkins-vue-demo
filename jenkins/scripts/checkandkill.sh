echo 'The following command terminates the "npm start" process using its PID'
echo '(written to ".pidfile"), all of which were conducted when "deliver.sh"'
echo 'was executed.'
echo 'Check if there is .pidfile'
file=".pidfile"
if [ -f "$file"] then
  set -x
  kill $(cat .pidfile)
fi