#!/bin/bash

NOTION_API_KEY=$1

curl https://api.notion.com/v1/blocks/c7b6c8ad68a64f8385a343f7ebfcf298/children?page_size=100 \
  -H 'Authorization: Bearer '"$NOTION_API_KEY"'' \
  -H "Notion-Version: 2022-06-28"