# Kudos to Mohamed Ayadi (https://github.com/mamayadi) for creating the base script
#!/usr/bin/env bash
red='\033[0;31m'
white='\033[0;37m'
NC='\033[0m' # No Color
echo -e "${white}\t\t███╗   ███╗██████╗ ██╗    ██╗${red} ██████╗  ██████╗ ███████╗"
echo -e "${white}\t\t████╗ ████║██╔══██╗██║    ██║${red}██╔═████╗██╔═████╗╚════██║"
echo -e "${white}\t\t██╔████╔██║██████╔╝██║ █╗ ██║${red}██║██╔██║██║██╔██║    ██╔╝"
echo -e "${white}\t\t██║╚██╔╝██║██╔══██╗██║███╗██║${red}████╔╝██║████╔╝██║   ██╔╝ "
echo -e "${white}\t\t██║ ╚═╝ ██║██║  ██║╚███╔███╔╝${red}╚██████╔╝╚██████╔╝   ██║  "
echo -e "${white}\t\t╚═╝     ╚═╝╚═╝  ╚═╝ ╚══╝╚══╝ ${red} ╚═════╝  ╚═════╝    ╚═╝  "
echo -e "${NC}"
case $1 in
create-env-dev)
	echo -e "${red}"
	echo "############################################################################"
	echo " We are going to create docker container for Angular developer environment"
	echo "############################################################################"
	echo -e "${NC}"
	docker-compose --project-name angular-seed-project-dev -f docker-compose.yml up -d --build --force-recreate --renew-anon-volumes
	break
	;;
create-env-prod)
	echo -e "${red}"
	echo "############################################################################"
	echo " We are going to create a docker container for test production environment"
	echo "############################################################################"
	echo -e "${NC}"
	docker-compose --project-name angular-seed-project-prod -f docker-compose.prod.yml up -d --build --force-recreate --renew-anon-volumes
	break
	;;
start)
	echo -e "${red}"
	echo "############################################################################"
	echo "            We are going to start dev server on docker container"
	echo "############################################################################"
	echo -e "${NC}"
	winpty docker exec -it angular_seed_project_dev bash
	break
	;;
start-linux)
	echo -e "${red}"
	echo "############################################################################"
	echo "            We are going to start dev server on docker container"
	echo "############################################################################"
	echo -e "${NC}"
	docker exec -it angular_seed_project_dev bash
	break
	;;
-h | --help)
	echo -e '
  A script to start project container in dev environment

Command line options:
    create-env-dev       Build docker dev environment
    create-env-prod      Build docker producntion environment
    start                Start the docker node container on Windows
    start-linux          Start the docker node container on Linux 
    -h | --help          Print this help menu

'
	exit 0
	;;
*)
	echo "Usage: $(basename $0) [-h|--help]"
	exit 0
	;;
esac
