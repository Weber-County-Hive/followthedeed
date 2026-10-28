// Follow the Deed — case file data
// Add a new case by adding one object to this array. No other file needs to change.
// shelf: "100" Statewide, "200" Weber County, "300" Davis County, "400" Wasatch County, "500" Summit County, "600" Box Elder County
// callNumber: printed at the bottom of every page (FD = Follow the Deed). plain: the plain-words companion page.
const FOLLOWTHEDEED_CASES = [
  {
    id: "wasatch-highlands",
    shelf: "400",
    callNumber: "FD 400.01",
    title: "The Chain Behind Wasatch Highlands",
    file: "weber-hive-philo-wasatch-highlands.html",
    plain: "weber-hive-philo-wasatch-highlands-plain.html",
    caseNumber: "01",
    county: "Wasatch",
    dateAdded: "2026-08-29",
    dateUpdated: "2026-10-28",
    summary: "Philo Development/Mountain Venture Studios used a 720-acre SITLA lease and a 2,700-acre preliminary municipality to try to build a town east of Heber — with a sitting Cox staffer on the board that oversees the SITLA deal.",
    tags: ["Philo Development", "SITLA", "preliminary municipality", "Wasatch Highlands", "Mountain Venture Studios", "Cox", "Mike Mower"]
  },
  {
    id: "lost-creek",
    shelf: "500",
    callNumber: "FD 500.01",
    title: "The Backstop That Became a Bypass",
    file: "weber-hive-ivory-lost-creek.html",
    plain: "weber-hive-ivory-lost-creek-plain.html",
    caseNumber: "02",
    county: "Summit",
    dateAdded: "2026-09-05",
    dateUpdated: "2026-10-28",
    summary: "Ivory Homes used a family ranch, two landowner LLCs, and the same 2024 state law to try to create its own town in Summit County. The bill that would have given the county a say failed in the Senate by one vote — and the same statute's own eligibility threshold was quietly rewritten a year earlier by a bill its own Senate sponsor later sat out that vote on.",
    tags: ["Ivory Homes", "preliminary municipality", "Lost Creek", "HB 510", "HB 37", "Garff Rogers Ranch", "PID", "Fillmore", "Waldrip"]
  },
  {
    id: "west-weber-network",
    shelf: "200",
    callNumber: "FD 200.01",
    title: "More Lots, Same Playbook",
    file: "weber-hive-west-weber-network.html",
    plain: "weber-hive-west-weber-network-plain.html",
    caseNumber: "03",
    county: "Weber",
    dateAdded: "2026-09-08",
    dateUpdated: "2026-10-28",
    summary: "Two developer networks — Black Pine/Pat Burns and Nilson Homes — both get more units approved on the same acreage inside UIPA's West Weber project area, market part of it as affordable, and let elected officials champion the label on the record.",
    tags: ["Black Pine", "Pat Burns", "Nilson Homes", "UIPA", "West Weber", "Gibson", "Bolos", "Waldrip", "affordable housing"]
  },
  {
    id: "schultz-water-rights",
    shelf: "600",
    callNumber: "FD 600.01",
    title: "The Applicant Holds Those Rights",
    file: "weber-hive-schultz-water-rights.html",
    plain: "weber-hive-schultz-water-rights-plain.html",
    caseNumber: "04",
    county: "Box Elder",
    dateAdded: "2026-09-08",
    dateUpdated: "2026-10-28",
    summary: "House Speaker Mike Schultz's ranching corporation won new water rights near the Great Salt Lake, approved by a state engineer who acknowledged impairment risk because the applicant held those rights himself — and a signed order that says a hearing wasn't held, when one was.",
    tags: ["Mike Schultz", "Keller Cattle Corp", "water rights", "Promontory", "Great Salt Lake", "State Engineer", "Farmland Reserve", "Golden Spike", "UIPA"]
  },
  {
    id: "nordic-village-froerer",
    shelf: "200",
    callNumber: "FD 200.02",
    title: "The Trustee Signed His Own Deal",
    file: "weber-hive-nordic-village-froerer.html",
    plain: "weber-hive-nordic-village-froerer-plain.html",
    caseNumber: "05",
    county: "Weber",
    dateAdded: "2026-09-08",
    dateUpdated: "2026-10-28",
    summary: "A county commissioner's entity transferred land for zero dollars, then dissolved. A PID trustee signed the same land into the district he oversees for ten dollars, on behalf of his own employer. And the resort's real owner — a French regional president co-leading his country's 2030 Olympic bid — never disclosed it to his own government.",
    tags: ["Nordic Village", "Froerer", "PID", "Jouffray", "Henrie", "Muselier", "Mediapart", "Sorep", "Olympics"]
    },
  {
    id: "osprey-ranch",
    shelf: "200",
    callNumber: "FD 200.03",
    title: "The Lots That Wait",
    file: "weber-hive-osprey-ranch.html",
    plain: "weber-hive-osprey-ranch-plain.html",
    caseNumber: "06",
    county: "Weber",
    dateAdded: "2026-10-28",
    dateUpdated: "2026-10-28",
    summary: "At Osprey Ranch in Eden, unsold lots held by the John Lewis and Shane Dunleavy development company carry about $550,000 in property taxes listed as unpaid, most since 2023. Back taxes get paid when a lot sells, and the lots the developers still held in 2026 dropped 13 to 32 percent in value while other owners' lots held steady.",
    tags: ["Osprey Ranch", "John Lewis", "Shane Dunleavy", "Lewis Group Holdings", "Edenview", "delinquent taxes", "property values", "Eden", "Wolf Creek", "Weber Basin"]
  }
];
