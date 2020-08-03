#!/bin/bash
function migrate_server_app_database() {
  task_family="#FILLME"
  cluster="#FILLME"
  task_name="#FILLME"
  task_command="prisma:migrate:up"
  subnet1="#FILLME"
  subnet2="#FILLME"
  security_group="#FILLME"

  revision="$( aws ecs describe-task-definition --task-definition $task_family --query taskDefinition.revision )"

  if [[ -z $revision ]] 
  then
    echo "!!! Unable to find appropriate revision for $task_family"
    exit 1
  fi

  task_definition="$task_family:$revision"

  echo "*** Running migration for server-app-database with $task_definition"

  cmd="aws ecs run-task \
        --cluster $cluster \
        --task-definition $task_definition \
        --overrides \"containerOverrides={name=$task_name,command=[$task_command]}\" \
        --network-configuration \"awsvpcConfiguration={subnets=[$subnet1,$subnet2],securityGroups=[$security_group]}\" \
        --count 1 \
        --launch-type FARGATE"

  result=$( eval $cmd )

  if [[ -z $result ]]
  then
    echo "!!! Failed to run migration"
    exit 1
  fi

  echo $result

  echo "*** Finished running migration for server-app-database"
}

migrate_server_app_database