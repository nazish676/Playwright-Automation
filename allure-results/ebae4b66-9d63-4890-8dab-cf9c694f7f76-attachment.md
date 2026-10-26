# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: OLogin.spec.ts >> logintest
- Location: tests\OLogin.spec.ts:11:5

# Error details

```
Error: locator.selectOption: Error: strict mode violation: locator('//div[contains(text(),\'Admin\')]') resolved to 3 elements:
    1) <div data-v-6c07a142="">Admin</div> aka getByText('Admin').nth(2)
    2) <div data-v-6c07a142="">Admin</div> aka getByText('Admin').nth(3)
    3) <div data-v-6c07a142="">Admin</div> aka getByText('Admin').nth(4)

Call log:
  - waiting for locator('//div[contains(text(),\'Admin\')]')

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic:
    - complementary [ref=e4]:
      - navigation "Sidepanel" [ref=e5]:
        - generic [ref=e6]:
          - link "client brand banner" [ref=e7] [cursor=pointer]:
            - /url: https://www.orangehrm.com/
            - img "client brand banner" [ref=e9]
          - text: 
        - generic [ref=e10]:
          - generic [ref=e11]:
            - generic [ref=e12]:
              - textbox "Search" [ref=e15]
              - button "" [ref=e16] [cursor=pointer]:
                - generic [ref=e17]: 
            - separator [ref=e18]
          - list [ref=e19]:
            - listitem [ref=e20]:
              - link "Admin" [ref=e21] [cursor=pointer]:
                - /url: /web/index.php/admin/viewAdminModule
                - generic [ref=e24]: Admin
            - listitem [ref=e25]:
              - link "PIM" [ref=e26] [cursor=pointer]:
                - /url: /web/index.php/pim/viewPimModule
                - generic [ref=e40]: PIM
            - listitem [ref=e41]:
              - link "Leave" [ref=e42] [cursor=pointer]:
                - /url: /web/index.php/leave/viewLeaveModule
                - generic [ref=e45]: Leave
            - listitem [ref=e46]:
              - link "Time" [ref=e47] [cursor=pointer]:
                - /url: /web/index.php/time/viewTimeModule
                - generic [ref=e53]: Time
            - listitem [ref=e54]:
              - link "Recruitment" [ref=e55] [cursor=pointer]:
                - /url: /web/index.php/recruitment/viewRecruitmentModule
                - generic [ref=e61]: Recruitment
            - listitem [ref=e62]:
              - link "My Info" [ref=e63] [cursor=pointer]:
                - /url: /web/index.php/pim/viewMyDetails
                - generic [ref=e69]: My Info
            - listitem [ref=e70]:
              - link "Performance" [ref=e71] [cursor=pointer]:
                - /url: /web/index.php/performance/viewPerformanceModule
                - generic [ref=e79]: Performance
            - listitem [ref=e80]:
              - link "Dashboard" [ref=e81] [cursor=pointer]:
                - /url: /web/index.php/dashboard/index
                - generic [ref=e84]: Dashboard
            - listitem [ref=e85]:
              - link "Directory" [ref=e86] [cursor=pointer]:
                - /url: /web/index.php/directory/viewDirectory
                - generic [ref=e89]: Directory
            - listitem [ref=e90]:
              - link "Maintenance" [ref=e91] [cursor=pointer]:
                - /url: /web/index.php/maintenance/viewMaintenanceModule
                - generic [ref=e95]: Maintenance
            - listitem [ref=e96]:
              - link "Claim" [ref=e97] [cursor=pointer]:
                - /url: /web/index.php/claim/viewClaimModule
                - img [ref=e100]
                - generic [ref=e104]: Claim
            - listitem [ref=e105]:
              - link "Buzz" [ref=e106] [cursor=pointer]:
                - /url: /web/index.php/buzz/viewBuzz
                - generic [ref=e109]: Buzz
    - banner [ref=e110]:
      - generic [ref=e111]:
        - generic [ref=e112]:
          - text: 
          - generic [ref=e113]:
            - heading "Admin" [level=6] [ref=e114]
            - heading "/ User Management" [level=6] [ref=e115]
        - link "Upgrade" [ref=e117]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=e118] [cursor=pointer]: Upgrade
        - list [ref=e124]:
          - listitem [ref=e125]:
            - generic [ref=e126] [cursor=pointer]:
              - img "profile picture" [ref=e127]
              - paragraph [ref=e128]: manda user
              - generic [ref=e129]: 
      - navigation "Topbar Menu" [ref=e131]:
        - list [ref=e132]:
          - listitem [ref=e133] [cursor=pointer]:
            - generic [ref=e134]:
              - text: User Management
              - generic [ref=e135]: 
          - listitem [ref=e136] [cursor=pointer]:
            - generic [ref=e137]:
              - text: Job
              - generic [ref=e138]: 
          - listitem [ref=e139] [cursor=pointer]:
            - generic [ref=e140]:
              - text: Organization
              - generic [ref=e141]: 
          - listitem [ref=e142] [cursor=pointer]:
            - generic [ref=e143]:
              - text: Qualifications
              - generic [ref=e144]: 
          - listitem [ref=e145] [cursor=pointer]:
            - link "Nationalities" [ref=e146]:
              - /url: "#"
          - listitem [ref=e147] [cursor=pointer]:
            - link "Corporate Branding" [ref=e148]:
              - /url: "#"
          - listitem [ref=e149] [cursor=pointer]:
            - generic [ref=e150]:
              - text: Configuration
              - generic [ref=e151]: 
          - button "" [ref=e153] [cursor=pointer]:
            - generic [ref=e154]: 
  - generic [ref=e155]:
    - generic [ref=e157]:
      - generic [ref=e158]:
        - generic [ref=e159]:
          - heading "System Users" [level=5] [ref=e161]
          - button "" [ref=e164] [cursor=pointer]:
            - generic [ref=e165]: 
        - separator [ref=e166]
        - generic [ref=e168]:
          - generic [ref=e170]:
            - generic [ref=e172]:
              - generic [ref=e174]: Username
              - textbox [ref=e176]
            - generic [ref=e178]:
              - generic [ref=e180]: User Role
              - generic [ref=e183] [cursor=pointer]:
                - generic [ref=e184]: "-- Select --"
                - generic [ref=e186]: 
            - generic [ref=e188]:
              - generic [ref=e190]: Employee Name
              - textbox "Type for hints..." [ref=e194]
            - generic [ref=e196]:
              - generic [ref=e198]: Status
              - generic [ref=e201] [cursor=pointer]:
                - generic [ref=e202]: "-- Select --"
                - generic [ref=e204]: 
          - separator [ref=e205]
          - generic [ref=e206]:
            - button "Reset" [ref=e207] [cursor=pointer]
            - button "Search" [ref=e208] [cursor=pointer]
      - generic [ref=e209]:
        - button " Add" [ref=e211] [cursor=pointer]:
          - generic [ref=e212]: 
          - text: Add
        - generic [ref=e213]:
          - separator [ref=e214]
          - generic [ref=e216]: (28) Records Found
        - table [ref=e218]:
          - rowgroup [ref=e219]:
            - row " Username  User Role  Employee Name  Status  Actions" [ref=e220]:
              - columnheader "" [ref=e221]:
                - generic [ref=e223] [cursor=pointer]:
                  - checkbox "" [ref=e224]
                  - generic [ref=e226]: 
              - columnheader "Username " [ref=e227]:
                - text: Username
                - generic [ref=e228]:
                  - generic [ref=e229] [cursor=pointer]: 
                  - text:  
              - columnheader "User Role " [ref=e230]:
                - text: User Role
                - generic [ref=e231]:
                  - generic [ref=e232] [cursor=pointer]: 
                  - text:  
              - columnheader "Employee Name " [ref=e233]:
                - text: Employee Name
                - generic [ref=e234]:
                  - generic [ref=e235] [cursor=pointer]: 
                  - text:  
              - columnheader "Status " [ref=e236]:
                - text: Status
                - generic [ref=e237]:
                  - generic [ref=e238] [cursor=pointer]: 
                  - text:  
              - columnheader "Actions" [ref=e239]
          - rowgroup [ref=e240]:
            - row " Admin Admin manda user Enabled  " [ref=e242]:
              - cell "" [ref=e243]:
                - generic [ref=e247]:
                  - checkbox "" [ref=e248]
                  - generic [ref=e250]: 
              - cell "Admin" [ref=e251]:
                - generic [ref=e252]: Admin
              - cell "Admin" [ref=e253]:
                - generic [ref=e254]: Admin
              - cell "manda user" [ref=e255]:
                - generic [ref=e256]: manda user
              - cell "Enabled" [ref=e257]:
                - generic [ref=e258]: Enabled
              - cell " " [ref=e259]:
                - generic [ref=e260]:
                  - button "" [ref=e261] [cursor=pointer]:
                    - generic [ref=e262]: 
                  - button "" [ref=e263] [cursor=pointer]:
                    - generic [ref=e264]: 
            - row " aipod5bybzo ESS Sai FIVE Enabled  " [ref=e266]:
              - cell "" [ref=e267]:
                - generic [ref=e270] [cursor=pointer]:
                  - checkbox "" [ref=e271]
                  - generic [ref=e273]: 
              - cell "aipod5bybzo" [ref=e274]:
                - generic [ref=e275]: aipod5bybzo
              - cell "ESS" [ref=e276]:
                - generic [ref=e277]: ESS
              - cell "Sai FIVE" [ref=e278]:
                - generic [ref=e279]: Sai FIVE
              - cell "Enabled" [ref=e280]:
                - generic [ref=e281]: Enabled
              - cell " " [ref=e282]:
                - generic [ref=e283]:
                  - button "" [ref=e284] [cursor=pointer]:
                    - generic [ref=e285]: 
                  - button "" [ref=e286] [cursor=pointer]:
                    - generic [ref=e287]: 
            - row " aipod5hoyoe ESS Sai FIVE Enabled  " [ref=e289]:
              - cell "" [ref=e290]:
                - generic [ref=e293] [cursor=pointer]:
                  - checkbox "" [ref=e294]
                  - generic [ref=e296]: 
              - cell "aipod5hoyoe" [ref=e297]:
                - generic [ref=e298]: aipod5hoyoe
              - cell "ESS" [ref=e299]:
                - generic [ref=e300]: ESS
              - cell "Sai FIVE" [ref=e301]:
                - generic [ref=e302]: Sai FIVE
              - cell "Enabled" [ref=e303]:
                - generic [ref=e304]: Enabled
              - cell " " [ref=e305]:
                - generic [ref=e306]:
                  - button "" [ref=e307] [cursor=pointer]:
                    - generic [ref=e308]: 
                  - button "" [ref=e309] [cursor=pointer]:
                    - generic [ref=e310]: 
            - row " FMLName ESS Qwerty LName Enabled  " [ref=e312]:
              - cell "" [ref=e313]:
                - generic [ref=e316] [cursor=pointer]:
                  - checkbox "" [ref=e317]
                  - generic [ref=e319]: 
              - cell "FMLName" [ref=e320]:
                - generic [ref=e321]: FMLName
              - cell "ESS" [ref=e322]:
                - generic [ref=e323]: ESS
              - cell "Qwerty LName" [ref=e324]:
                - generic [ref=e325]: Qwerty LName
              - cell "Enabled" [ref=e326]:
                - generic [ref=e327]: Enabled
              - cell " " [ref=e328]:
                - generic [ref=e329]:
                  - button "" [ref=e330] [cursor=pointer]:
                    - generic [ref=e331]: 
                  - button "" [ref=e332] [cursor=pointer]:
                    - generic [ref=e333]: 
            - row " FMLName1 ESS FName LName Enabled  " [ref=e335]:
              - cell "" [ref=e336]:
                - generic [ref=e339] [cursor=pointer]:
                  - checkbox "" [ref=e340]
                  - generic [ref=e342]: 
              - cell "FMLName1" [ref=e343]:
                - generic [ref=e344]: FMLName1
              - cell "ESS" [ref=e345]:
                - generic [ref=e346]: ESS
              - cell "FName LName" [ref=e347]:
                - generic [ref=e348]: FName LName
              - cell "Enabled" [ref=e349]:
                - generic [ref=e350]: Enabled
              - cell " " [ref=e351]:
                - generic [ref=e352]:
                  - button "" [ref=e353] [cursor=pointer]:
                    - generic [ref=e354]: 
                  - button "" [ref=e355] [cursor=pointer]:
                    - generic [ref=e356]: 
            - row " Janessa ESS Janessa Koelpin Enabled  " [ref=e358]:
              - cell "" [ref=e359]:
                - generic [ref=e362] [cursor=pointer]:
                  - checkbox "" [ref=e363]
                  - generic [ref=e365]: 
              - cell "Janessa" [ref=e366]:
                - generic [ref=e367]: Janessa
              - cell "ESS" [ref=e368]:
                - generic [ref=e369]: ESS
              - cell "Janessa Koelpin" [ref=e370]:
                - generic [ref=e371]: Janessa Koelpin
              - cell "Enabled" [ref=e372]:
                - generic [ref=e373]: Enabled
              - cell " " [ref=e374]:
                - generic [ref=e375]:
                  - button "" [ref=e376] [cursor=pointer]:
                    - generic [ref=e377]: 
                  - button "" [ref=e378] [cursor=pointer]:
                    - generic [ref=e379]: 
            - row " Jobinsam@6742 ESS Jobin Sam Enabled  " [ref=e381]:
              - cell "" [ref=e382]:
                - generic [ref=e385] [cursor=pointer]:
                  - checkbox "" [ref=e386]
                  - generic [ref=e388]: 
              - cell "Jobinsam@6742" [ref=e389]:
                - generic [ref=e390]: Jobinsam@6742
              - cell "ESS" [ref=e391]:
                - generic [ref=e392]: ESS
              - cell "Jobin Sam" [ref=e393]:
                - generic [ref=e394]: Jobin Sam
              - cell "Enabled" [ref=e395]:
                - generic [ref=e396]: Enabled
              - cell " " [ref=e397]:
                - generic [ref=e398]:
                  - button "" [ref=e399] [cursor=pointer]:
                    - generic [ref=e400]: 
                  - button "" [ref=e401] [cursor=pointer]:
                    - generic [ref=e402]: 
            - row " jon.15634761 ESS AUTOTESTJon15656293 Enabled Enabled  " [ref=e404]:
              - cell "" [ref=e405]:
                - generic [ref=e408] [cursor=pointer]:
                  - checkbox "" [ref=e409]
                  - generic [ref=e411]: 
              - cell "jon.15634761" [ref=e412]:
                - generic [ref=e413]: jon.15634761
              - cell "ESS" [ref=e414]:
                - generic [ref=e415]: ESS
              - cell "AUTOTESTJon15656293 Enabled" [ref=e416]:
                - generic [ref=e417]: AUTOTESTJon15656293 Enabled
              - cell "Enabled" [ref=e418]:
                - generic [ref=e419]: Enabled
              - cell " " [ref=e420]:
                - generic [ref=e421]:
                  - button "" [ref=e422] [cursor=pointer]:
                    - generic [ref=e423]: 
                  - button "" [ref=e424] [cursor=pointer]:
                    - generic [ref=e425]: 
            - row " jon.15862622 ESS AUTOTESTJon15883136 Enabled Enabled  " [ref=e427]:
              - cell "" [ref=e428]:
                - generic [ref=e431] [cursor=pointer]:
                  - checkbox "" [ref=e432]
                  - generic [ref=e434]: 
              - cell "jon.15862622" [ref=e435]:
                - generic [ref=e436]: jon.15862622
              - cell "ESS" [ref=e437]:
                - generic [ref=e438]: ESS
              - cell "AUTOTESTJon15883136 Enabled" [ref=e439]:
                - generic [ref=e440]: AUTOTESTJon15883136 Enabled
              - cell "Enabled" [ref=e441]:
                - generic [ref=e442]: Enabled
              - cell " " [ref=e443]:
                - generic [ref=e444]:
                  - button "" [ref=e445] [cursor=pointer]:
                    - generic [ref=e446]: 
                  - button "" [ref=e447] [cursor=pointer]:
                    - generic [ref=e448]: 
            - row " jon.17810672 ESS AUTOTESTJon17814991 Enabled Enabled  " [ref=e450]:
              - cell "" [ref=e451]:
                - generic [ref=e454] [cursor=pointer]:
                  - checkbox "" [ref=e455]
                  - generic [ref=e457]: 
              - cell "jon.17810672" [ref=e458]:
                - generic [ref=e459]: jon.17810672
              - cell "ESS" [ref=e460]:
                - generic [ref=e461]: ESS
              - cell "AUTOTESTJon17814991 Enabled" [ref=e462]:
                - generic [ref=e463]: AUTOTESTJon17814991 Enabled
              - cell "Enabled" [ref=e464]:
                - generic [ref=e465]: Enabled
              - cell " " [ref=e466]:
                - generic [ref=e467]:
                  - button "" [ref=e468] [cursor=pointer]:
                    - generic [ref=e469]: 
                  - button "" [ref=e470] [cursor=pointer]:
                    - generic [ref=e471]: 
            - row " jon.18056297 ESS AUTOTESTJon18064037 Enabled Enabled  " [ref=e473]:
              - cell "" [ref=e474]:
                - generic [ref=e477] [cursor=pointer]:
                  - checkbox "" [ref=e478]
                  - generic [ref=e480]: 
              - cell "jon.18056297" [ref=e481]:
                - generic [ref=e482]: jon.18056297
              - cell "ESS" [ref=e483]:
                - generic [ref=e484]: ESS
              - cell "AUTOTESTJon18064037 Enabled" [ref=e485]:
                - generic [ref=e486]: AUTOTESTJon18064037 Enabled
              - cell "Enabled" [ref=e487]:
                - generic [ref=e488]: Enabled
              - cell " " [ref=e489]:
                - generic [ref=e490]:
                  - button "" [ref=e491] [cursor=pointer]:
                    - generic [ref=e492]: 
                  - button "" [ref=e493] [cursor=pointer]:
                    - generic [ref=e494]: 
            - row " jon.18498142 ESS AUTOTESTJon18503496 Enabled Enabled  " [ref=e496]:
              - cell "" [ref=e497]:
                - generic [ref=e500] [cursor=pointer]:
                  - checkbox "" [ref=e501]
                  - generic [ref=e503]: 
              - cell "jon.18498142" [ref=e504]:
                - generic [ref=e505]: jon.18498142
              - cell "ESS" [ref=e506]:
                - generic [ref=e507]: ESS
              - cell "AUTOTESTJon18503496 Enabled" [ref=e508]:
                - generic [ref=e509]: AUTOTESTJon18503496 Enabled
              - cell "Enabled" [ref=e510]:
                - generic [ref=e511]: Enabled
              - cell " " [ref=e512]:
                - generic [ref=e513]:
                  - button "" [ref=e514] [cursor=pointer]:
                    - generic [ref=e515]: 
                  - button "" [ref=e516] [cursor=pointer]:
                    - generic [ref=e517]: 
            - row " kim.15667341 ESS AUTOTESTKim15668345 Disabled Disabled  " [ref=e519]:
              - cell "" [ref=e520]:
                - generic [ref=e523] [cursor=pointer]:
                  - checkbox "" [ref=e524]
                  - generic [ref=e526]: 
              - cell "kim.15667341" [ref=e527]:
                - generic [ref=e528]: kim.15667341
              - cell "ESS" [ref=e529]:
                - generic [ref=e530]: ESS
              - cell "AUTOTESTKim15668345 Disabled" [ref=e531]:
                - generic [ref=e532]: AUTOTESTKim15668345 Disabled
              - cell "Disabled" [ref=e533]:
                - generic [ref=e534]: Disabled
              - cell " " [ref=e535]:
                - generic [ref=e536]:
                  - button "" [ref=e537] [cursor=pointer]:
                    - generic [ref=e538]: 
                  - button "" [ref=e539] [cursor=pointer]:
                    - generic [ref=e540]: 
            - row " kim.15894537 ESS AUTOTESTKim15895443 Disabled Disabled  " [ref=e542]:
              - cell "" [ref=e543]:
                - generic [ref=e546] [cursor=pointer]:
                  - checkbox "" [ref=e547]
                  - generic [ref=e549]: 
              - cell "kim.15894537" [ref=e550]:
                - generic [ref=e551]: kim.15894537
              - cell "ESS" [ref=e552]:
                - generic [ref=e553]: ESS
              - cell "AUTOTESTKim15895443 Disabled" [ref=e554]:
                - generic [ref=e555]: AUTOTESTKim15895443 Disabled
              - cell "Disabled" [ref=e556]:
                - generic [ref=e557]: Disabled
              - cell " " [ref=e558]:
                - generic [ref=e559]:
                  - button "" [ref=e560] [cursor=pointer]:
                    - generic [ref=e561]: 
                  - button "" [ref=e562] [cursor=pointer]:
                    - generic [ref=e563]: 
            - row " kim.17339520 ESS AUTOTESTKim17359790 Disabled Disabled  " [ref=e565]:
              - cell "" [ref=e566]:
                - generic [ref=e569] [cursor=pointer]:
                  - checkbox "" [ref=e570]
                  - generic [ref=e572]: 
              - cell "kim.17339520" [ref=e573]:
                - generic [ref=e574]: kim.17339520
              - cell "ESS" [ref=e575]:
                - generic [ref=e576]: ESS
              - cell "AUTOTESTKim17359790 Disabled" [ref=e577]:
                - generic [ref=e578]: AUTOTESTKim17359790 Disabled
              - cell "Disabled" [ref=e579]:
                - generic [ref=e580]: Disabled
              - cell " " [ref=e581]:
                - generic [ref=e582]:
                  - button "" [ref=e583] [cursor=pointer]:
                    - generic [ref=e584]: 
                  - button "" [ref=e585] [cursor=pointer]:
                    - generic [ref=e586]: 
            - row " kim.17537134 ESS AUTOTESTKim17554765 Disabled Disabled  " [ref=e588]:
              - cell "" [ref=e589]:
                - generic [ref=e592] [cursor=pointer]:
                  - checkbox "" [ref=e593]
                  - generic [ref=e595]: 
              - cell "kim.17537134" [ref=e596]:
                - generic [ref=e597]: kim.17537134
              - cell "ESS" [ref=e598]:
                - generic [ref=e599]: ESS
              - cell "AUTOTESTKim17554765 Disabled" [ref=e600]:
                - generic [ref=e601]: AUTOTESTKim17554765 Disabled
              - cell "Disabled" [ref=e602]:
                - generic [ref=e603]: Disabled
              - cell " " [ref=e604]:
                - generic [ref=e605]:
                  - button "" [ref=e606] [cursor=pointer]:
                    - generic [ref=e607]: 
                  - button "" [ref=e608] [cursor=pointer]:
                    - generic [ref=e609]: 
            - row " kim.17826927 ESS AUTOTESTKim17828391 Disabled Disabled  " [ref=e611]:
              - cell "" [ref=e612]:
                - generic [ref=e615] [cursor=pointer]:
                  - checkbox "" [ref=e616]
                  - generic [ref=e618]: 
              - cell "kim.17826927" [ref=e619]:
                - generic [ref=e620]: kim.17826927
              - cell "ESS" [ref=e621]:
                - generic [ref=e622]: ESS
              - cell "AUTOTESTKim17828391 Disabled" [ref=e623]:
                - generic [ref=e624]: AUTOTESTKim17828391 Disabled
              - cell "Disabled" [ref=e625]:
                - generic [ref=e626]: Disabled
              - cell " " [ref=e627]:
                - generic [ref=e628]:
                  - button "" [ref=e629] [cursor=pointer]:
                    - generic [ref=e630]: 
                  - button "" [ref=e631] [cursor=pointer]:
                    - generic [ref=e632]: 
            - row " kim.18074282 ESS AUTOTESTKim18075195 Disabled Disabled  " [ref=e634]:
              - cell "" [ref=e635]:
                - generic [ref=e638] [cursor=pointer]:
                  - checkbox "" [ref=e639]
                  - generic [ref=e641]: 
              - cell "kim.18074282" [ref=e642]:
                - generic [ref=e643]: kim.18074282
              - cell "ESS" [ref=e644]:
                - generic [ref=e645]: ESS
              - cell "AUTOTESTKim18075195 Disabled" [ref=e646]:
                - generic [ref=e647]: AUTOTESTKim18075195 Disabled
              - cell "Disabled" [ref=e648]:
                - generic [ref=e649]: Disabled
              - cell " " [ref=e650]:
                - generic [ref=e651]:
                  - button "" [ref=e652] [cursor=pointer]:
                    - generic [ref=e653]: 
                  - button "" [ref=e654] [cursor=pointer]:
                    - generic [ref=e655]: 
            - row " kim.18513329 ESS AUTOTESTKim18514328 Disabled Disabled  " [ref=e657]:
              - cell "" [ref=e658]:
                - generic [ref=e661] [cursor=pointer]:
                  - checkbox "" [ref=e662]
                  - generic [ref=e664]: 
              - cell "kim.18513329" [ref=e665]:
                - generic [ref=e666]: kim.18513329
              - cell "ESS" [ref=e667]:
                - generic [ref=e668]: ESS
              - cell "AUTOTESTKim18514328 Disabled" [ref=e669]:
                - generic [ref=e670]: AUTOTESTKim18514328 Disabled
              - cell "Disabled" [ref=e671]:
                - generic [ref=e672]: Disabled
              - cell " " [ref=e673]:
                - generic [ref=e674]:
                  - button "" [ref=e675] [cursor=pointer]:
                    - generic [ref=e676]: 
                  - button "" [ref=e677] [cursor=pointer]:
                    - generic [ref=e678]: 
            - row " lena.flow008430 ESS AUTOTESTLena008430 Flow Enabled  " [ref=e680]:
              - cell "" [ref=e681]:
                - generic [ref=e684] [cursor=pointer]:
                  - checkbox "" [ref=e685]
                  - generic [ref=e687]: 
              - cell "lena.flow008430" [ref=e688]:
                - generic [ref=e689]: lena.flow008430
              - cell "ESS" [ref=e690]:
                - generic [ref=e691]: ESS
              - cell "AUTOTESTLena008430 Flow" [ref=e692]:
                - generic [ref=e693]: AUTOTESTLena008430 Flow
              - cell "Enabled" [ref=e694]:
                - generic [ref=e695]: Enabled
              - cell " " [ref=e696]:
                - generic [ref=e697]:
                  - button "" [ref=e698] [cursor=pointer]:
                    - generic [ref=e699]: 
                  - button "" [ref=e700] [cursor=pointer]:
                    - generic [ref=e701]: 
            - row " lena.flow270788 ESS AUTOTESTLena270788 Flow Enabled  " [ref=e703]:
              - cell "" [ref=e704]:
                - generic [ref=e707] [cursor=pointer]:
                  - checkbox "" [ref=e708]
                  - generic [ref=e710]: 
              - cell "lena.flow270788" [ref=e711]:
                - generic [ref=e712]: lena.flow270788
              - cell "ESS" [ref=e713]:
                - generic [ref=e714]: ESS
              - cell "AUTOTESTLena270788 Flow" [ref=e715]:
                - generic [ref=e716]: AUTOTESTLena270788 Flow
              - cell "Enabled" [ref=e717]:
                - generic [ref=e718]: Enabled
              - cell " " [ref=e719]:
                - generic [ref=e720]:
                  - button "" [ref=e721] [cursor=pointer]:
                    - generic [ref=e722]: 
                  - button "" [ref=e723] [cursor=pointer]:
                    - generic [ref=e724]: 
            - row " lena.flow444576 ESS AUTOTESTLena444576 Flow Enabled  " [ref=e726]:
              - cell "" [ref=e727]:
                - generic [ref=e730] [cursor=pointer]:
                  - checkbox "" [ref=e731]
                  - generic [ref=e733]: 
              - cell "lena.flow444576" [ref=e734]:
                - generic [ref=e735]: lena.flow444576
              - cell "ESS" [ref=e736]:
                - generic [ref=e737]: ESS
              - cell "AUTOTESTLena444576 Flow" [ref=e738]:
                - generic [ref=e739]: AUTOTESTLena444576 Flow
              - cell "Enabled" [ref=e740]:
                - generic [ref=e741]: Enabled
              - cell " " [ref=e742]:
                - generic [ref=e743]:
                  - button "" [ref=e744] [cursor=pointer]:
                    - generic [ref=e745]: 
                  - button "" [ref=e746] [cursor=pointer]:
                    - generic [ref=e747]: 
            - row " lena.flow487942 ESS AUTOTESTLena487942 Flow Enabled  " [ref=e749]:
              - cell "" [ref=e750]:
                - generic [ref=e753] [cursor=pointer]:
                  - checkbox "" [ref=e754]
                  - generic [ref=e756]: 
              - cell "lena.flow487942" [ref=e757]:
                - generic [ref=e758]: lena.flow487942
              - cell "ESS" [ref=e759]:
                - generic [ref=e760]: ESS
              - cell "AUTOTESTLena487942 Flow" [ref=e761]:
                - generic [ref=e762]: AUTOTESTLena487942 Flow
              - cell "Enabled" [ref=e763]:
                - generic [ref=e764]: Enabled
              - cell " " [ref=e765]:
                - generic [ref=e766]:
                  - button "" [ref=e767] [cursor=pointer]:
                    - generic [ref=e768]: 
                  - button "" [ref=e769] [cursor=pointer]:
                    - generic [ref=e770]: 
            - row " lena.flow566789 ESS AUTOTESTLena566789 Flow Enabled  " [ref=e772]:
              - cell "" [ref=e773]:
                - generic [ref=e776] [cursor=pointer]:
                  - checkbox "" [ref=e777]
                  - generic [ref=e779]: 
              - cell "lena.flow566789" [ref=e780]:
                - generic [ref=e781]: lena.flow566789
              - cell "ESS" [ref=e782]:
                - generic [ref=e783]: ESS
              - cell "AUTOTESTLena566789 Flow" [ref=e784]:
                - generic [ref=e785]: AUTOTESTLena566789 Flow
              - cell "Enabled" [ref=e786]:
                - generic [ref=e787]: Enabled
              - cell " " [ref=e788]:
                - generic [ref=e789]:
                  - button "" [ref=e790] [cursor=pointer]:
                    - generic [ref=e791]: 
                  - button "" [ref=e792] [cursor=pointer]:
                    - generic [ref=e793]: 
            - row " lena.flow768774 ESS AUTOTESTLena768774 Flow Enabled  " [ref=e795]:
              - cell "" [ref=e796]:
                - generic [ref=e799] [cursor=pointer]:
                  - checkbox "" [ref=e800]
                  - generic [ref=e802]: 
              - cell "lena.flow768774" [ref=e803]:
                - generic [ref=e804]: lena.flow768774
              - cell "ESS" [ref=e805]:
                - generic [ref=e806]: ESS
              - cell "AUTOTESTLena768774 Flow" [ref=e807]:
                - generic [ref=e808]: AUTOTESTLena768774 Flow
              - cell "Enabled" [ref=e809]:
                - generic [ref=e810]: Enabled
              - cell " " [ref=e811]:
                - generic [ref=e812]:
                  - button "" [ref=e813] [cursor=pointer]:
                    - generic [ref=e814]: 
                  - button "" [ref=e815] [cursor=pointer]:
                    - generic [ref=e816]: 
            - row " lena.flow831222 ESS AUTOTESTLena831222 Flow Enabled  " [ref=e818]:
              - cell "" [ref=e819]:
                - generic [ref=e822] [cursor=pointer]:
                  - checkbox "" [ref=e823]
                  - generic [ref=e825]: 
              - cell "lena.flow831222" [ref=e826]:
                - generic [ref=e827]: lena.flow831222
              - cell "ESS" [ref=e828]:
                - generic [ref=e829]: ESS
              - cell "AUTOTESTLena831222 Flow" [ref=e830]:
                - generic [ref=e831]: AUTOTESTLena831222 Flow
              - cell "Enabled" [ref=e832]:
                - generic [ref=e833]: Enabled
              - cell " " [ref=e834]:
                - generic [ref=e835]:
                  - button "" [ref=e836] [cursor=pointer]:
                    - generic [ref=e837]: 
                  - button "" [ref=e838] [cursor=pointer]:
                    - generic [ref=e839]: 
            - row " Murtuza Admin Peter Anderson Enabled  " [ref=e841]:
              - cell "" [ref=e842]:
                - generic [ref=e845] [cursor=pointer]:
                  - checkbox "" [ref=e846]
                  - generic [ref=e848]: 
              - cell "Murtuza" [ref=e849]:
                - generic [ref=e850]: Murtuza
              - cell "Admin" [ref=e851]:
                - generic [ref=e852]: Admin
              - cell "Peter Anderson" [ref=e853]:
                - generic [ref=e854]: Peter Anderson
              - cell "Enabled" [ref=e855]:
                - generic [ref=e856]: Enabled
              - cell " " [ref=e857]:
                - generic [ref=e858]:
                  - button "" [ref=e859] [cursor=pointer]:
                    - generic [ref=e860]: 
                  - button "" [ref=e861] [cursor=pointer]:
                    - generic [ref=e862]: 
            - row " Saige ESS Saige Fay Enabled  " [ref=e864]:
              - cell "" [ref=e865]:
                - generic [ref=e868] [cursor=pointer]:
                  - checkbox "" [ref=e869]
                  - generic [ref=e871]: 
              - cell "Saige" [ref=e872]:
                - generic [ref=e873]: Saige
              - cell "ESS" [ref=e874]:
                - generic [ref=e875]: ESS
              - cell "Saige Fay" [ref=e876]:
                - generic [ref=e877]: Saige Fay
              - cell "Enabled" [ref=e878]:
                - generic [ref=e879]: Enabled
              - cell " " [ref=e880]:
                - generic [ref=e881]:
                  - button "" [ref=e882] [cursor=pointer]:
                    - generic [ref=e883]: 
                  - button "" [ref=e884] [cursor=pointer]:
                    - generic [ref=e885]: 
    - generic [ref=e887]:
      - paragraph [ref=e888]: OrangeHRM OS 5.9
      - paragraph [ref=e889]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=e890] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  1  | import {Page,Locator} from '@playwright/test';
  2  | 
  3  | export class addAdmin
  4  | {
  5  | private readonly page:Page;
  6  | private readonly admintxt:Locator;
  7  | private readonly tablelist:Locator;
  8  | 
  9  | private readonly headerText:Locator;
  10 | private readonly add:Locator;
  11 | private readonly userrole:Locator;
  12 | private readonly selectadmin:Locator;
  13 | private readonly userstatus:Locator;
  14 | 
  15 | 
  16 | 
  17 | 
  18 | constructor(page:Page)
  19 | {
  20 |     this.page=page;
  21 |     this.admintxt=  page.locator("//li[1]//a[1]//span[1]");
  22 |     this.headerText=page.getByRole('heading', { name: /User Management/i });
  23 |      this.add=page.locator("//button[normalize-space()='Add']");
  24 |      this.userrole=page.locator("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > form:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)");
  25 |      this.selectadmin=page.locator("//div[contains(text(),'Admin')]");
  26 |     this.userstatus=page.getByText('-- Select --', { exact: true });
  27 |     this.tablelist=page.locator('.oxd-table-card');
  28 | }
  29 | async Adminpage()
  30 | {
  31 |     console.log('in the block');
  32 |     await this.page.waitForTimeout(2000);
  33 |     await this.admintxt.click();
  34 |     let innertext=await this.headerText.allInnerTexts();
  35 |     console.log(innertext);
  36 | //     await this.add.click();
  37 | //     //await this.page.pause();
  38 | //     await this.userrole.click();
> 39 |      await this.selectadmin.selectOption('Admin')
     |                             ^ Error: locator.selectOption: Error: strict mode violation: locator('//div[contains(text(),\'Admin\')]') resolved to 3 elements:
  40 |      await this.page.pause
  41 |      await this.userrole.selectOption('Admin');
  42 | //     await this.userstatus.click();
  43 | //     await this.userstatus.selectOption('Enabled');
  44 |      const tablealllist=await this.tablelist.allInnerTexts();
  45 |       console.log(tablealllist);
  46 |        
  47 |         
  48 | 
  49 |   
  50 | }
  51 | 
  52 | 
  53 | } 
```