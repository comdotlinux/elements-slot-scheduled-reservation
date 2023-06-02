#!/usr/bin/env bash

trap "rm -fv /tmp/elements-slots" EXIT

curl --cookie-jar /tmp/elements-slots 'https://slots.elements.com' \
  --data-urlencode "action=login" \
  --data-urlencode "send=1" \
  --data-urlencode "email=$ELEMENTS_EMAIL" \
  --data-urlencode "password=$ELEMENTS_PASSWORD"
# course_sheet_id=340886&studio_id=65  is balanstrasse
curl --cookie /tmp/elements-slots 'https://slots.elements.com/sheet.php?action=register&course_sheet_id=340886&studio_id=65'