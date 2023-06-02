# elements-slot-scheduled-reservation

## Simple Script that reserves the elements gym reservation slot

### How To Use
1. Clone this repo
1. Create two repository secrets by going to Settings > Secrets and variables > Actions > Click on new Repository secret
    1. Or See https://docs.github.com/en/actions/security-guides/encrypted-secrets#creating-encrypted-secrets-for-a-repository
    1. Or For this repo the link is : https://github.com/comdotlinux/elements-slot-scheduled-reservation/settings/secrets/actions
1. Create a secret named `ELEMENTS_EMAIL` with value as your email
1. Create a secret named `ELEMENTS_PASSWORD` with value as your time slot reservation password
1. Goto Actions > Reserve Slot > find text `This workflow has a workflow_dispatch event trigger.` and next to it click the button "Run Workflow" and then "Run Workflow" to check that it works
1. In the Run > reserve > Run ./reserve-next-slot.sh > you should be able to find the text : `Sie sind in diesen Kurs eingeschrieben!`
1. You are Done!

* Above steps are only required once.
* There should now be a schedule that runs theis every Sunday, Tuesday and Friday at 12 PM.