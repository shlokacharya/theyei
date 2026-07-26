type Member = {
  name: string
  positions: string[]
  linkedin?: string
  github?: string
  email?: string
}

const exec: Member[] = [
  {
    name: 'Gaathri Chakka',
    positions: ['Chief Executive Officer'],
    linkedin: 'gaathri-chakka-b20308279',
  },
  {
    name: 'Prasanna Chandankhede',
    positions: ['Chief Operating Officer'],
    linkedin: 'prasanna-chandankhede-328749287',
  },
  {
    name: 'Eric Lin',
    positions: ['Chief of Staff'],
    linkedin: 'eric-lin-579b3134b',
    email: 'ericlin@theyei.org',
  },
  {
    name: 'Shlok Acharya',
    positions: ['VP of Tech'],
    linkedin: 'shlok-acharya-07941929b',
  },
  {
    name: 'Serena Lin',
    positions: ['VP of Marketing'],
    linkedin: 'serena-lin-737796394',
  },
  {
    name: 'Drona Gaddam',
    positions: ['VP of Resources'],
    linkedin: 'drona-gaddam-359a07281',
  },
  {
    name: 'Manan Dua',
    positions: ['VP of Finance'],
    linkedin: 'manan-dua-9329172bb',
  },
  {
    name: 'Eli Orbach',
    positions: ['VP of Events'],
    linkedin: 'eli-orbach-92a0b2341',
  },
  {
    name: 'Satya Dindi',
    positions: ['VP of Clubs'],
    linkedin: 'satya-dindi',
  },
  {
    name: 'Deniz Yaveroglu',
    positions: ['VP of FLIP'],
    linkedin: 'deniz-yaveroglu-b194bb2ba',
    email: 'denizyav@theyei.org',
  },
]

const team: Member[] = [
  {
    name: 'Michael Zhao',
    positions: ['Director of FLIP'],
    linkedin: 'michael-zhao-bb051b256',
  },
  {
    name: 'Sricharan Bala',
    positions: [
      'Sponsorship and Grant Coordinator & FLIP Curriculum Developer',
    ],
    linkedin: 'sricharan-bala-1a717b2bb',
  },
  {
    name: 'Mahesh Yandra',
    positions: ['FLIP Curriculum Developer'],
    linkedin: 'mahesh-y-b96716334',
  },  
  {
    name: 'Kioni Chong',
    positions: ['Sponsorship and Grant Coordinator'],
  },
  {
    name: 'Ava Jerman',
    positions: ['Sponsorship and Grant Coordinator'],
    linkedin: 'ava-jerman-0b326b2a2',
  },
  {
    name: 'Aahaan Jain',
    positions: ['Sponsorship and Grant Coordinator'],
    linkedin: 'aahaan-jain-703794380',
  },
  {
    name: 'Peter Yang',
    positions: ['Sponsorship and Grant Coordinator'],
    linkedin: 'peter-yang26',
  },
  {
    name: 'Afra Miao',
    positions: ['Sponsorship and Grant Coordinator'],
    linkedin: 'afra-miao-0080a2396',
  },
  {
    name: 'Elizabeth Holmes',
    positions: ['Sponsorship and Grant Coordinator'],
    linkedin: 'elizabeth-holmes-29aa9b370',
  },
  {
    name: 'Shreya Ranawat',
    positions: ['Sponsorship and Grant Coordinator'],
    linkedin: 'shreya-ranawat-72656035b',
  },
  {
    name: 'Yashvi Ghelani',
    positions: ['Sponsorship and Grant Coordinator'],
    linkedin: 'yashvi-ghelani-807631364',
  },
  {
    name: 'Riya Mukherjee',
    positions: ['Sponsorship and Grant Coordinator'],
  },
  {
    name: 'Christine Idika Kalu',
    positions: ['Sponsorship and Grant Coordinator'],
    linkedin: 'christine-idika-kalu-503a08384',
  },
  {
    name: 'Zoe M',
    positions: ['Sponsorship and Grant Coordinator'],
    linkedin: 'zoe-m-9a3593327',
  },
  {
    name: 'Samara Hamza',
    positions: ['Sponsorship and Grant Coordinator'],
    linkedin: 'samara-hamza-6645b0386',
  },
  {
    name: 'Linus Li',
    positions: ['YEI Podcast Co-Director'],
    linkedin: 'linus-li-6295042a2',
  },
  {
    name: 'Lake Zhou',
    positions: ['Curriculum Developer'],
    linkedin: 'lake-zhou-3183902a8',
  },
  {
    name: 'Auritro Chakraborty',
    positions: ['Curriculum Developer'],
    linkedin: 'auritro-chakraborty-01a4bb245',
  },
  {
    name: 'Shivam Gupta',
    positions: ['Curriculum Developer'],
    linkedin: 'shivam-gupta-878792216',
  },
  {
    name: 'Ishika Chakraborty',
    positions: ['Curriculum Developer'],
    linkedin: 'ishika-chakraborty-5bb10a336',
  },
  {
    name: 'Caleb Son',
    positions: ['Curriculum Developer'],
  },
  {
    name: 'Aarav Gupta',
    positions: ['Curriculum Developer'],
  },
  {
    name: 'Windsor Kiang',
    positions: ['Curriculum Developer'],
    linkedin: 'windsor-kiang-903299308',
  },
  {
    name: 'Lydia Liu',
    positions: ['Curriculum Developer'],
    linkedin: 'lydia-liu-993284338',
  },
  {
    name: 'Ben Netser',
    positions: ['Curriculum Developer'],
    linkedin: 'ben-netser-a1556b3a1',
  },
  {
    name: 'Daniel W',
    positions: ['Curriculum Developer'],
    linkedin: 'daniel-w-36881540a',
  },
  {
    name: 'Akshat Ranjan',
    positions: ['Event Coordinator'],
    linkedin: 'akshat-ranjan-b42416358',
  },
  {
    name: 'Benjamin Zheng',
    positions: ['Event Coordinator'],
    linkedin: 'benjamin-zheng-261346396',
  },
  {
    name: 'Swarnika Naik',
    positions: ['Event Coordinator'],
    linkedin: 'swarnika-naik-0b0505399',
  },
  {
    name: 'Sophia Balaraman',
    positions: ['Event Coordinator'],
    linkedin: 'sophia-balaraman-219435417',
  },
  {
    name: 'Viyan Patel',
    positions: ['Team Ambassador', 'FLIP Social Media Manager'],
    linkedin: 'viyanpatel',
  },
  {
    name: 'Chriselle Varghese',
    positions: ['Team Ambassador'],
    linkedin: 'chriselle-varghese-541744220',
  },
  {
    name: 'Alex Park',
    positions: ['Team Ambassador'],
    linkedin: 'alex-park-93b155286',
  },
  {
    name: 'Saasthra Bojja',
    positions: ['Team Ambassador'],
    linkedin: 'saasthra-bojja-4b31a3303',
  },
  {
    name: 'Maite Miguez',
    positions: ['Team Ambassador'],
    linkedin: 'maite-miguez-00948a2b1',
  },
  {
    name: 'Aditi Gandhi',
    positions: ['Team Ambassador'],
    linkedin: 'aditi-gandhi-086132399',
  },
  {
    name: 'Lucas Jiang',
    positions: ['Team Ambassador'],
    linkedin: 'lucas-jiang-7090a8398',
  },
  {
    name: 'Kayla Anderson',
    positions: ['Marketing Specialist'],
    linkedin: '-kayla-anderson-',
  },
  {
    name: 'Emili Nguyen',
    positions: ['Marketing Specialist'],
    linkedin: 'emili-nguyen-0ab2b638b',
  },
  {
    name: 'Anushka Ramchander',
    positions: ['Marketing Specialist'],
    linkedin: 'anushka-ramchander-b279b8376',
  },
  {
    name: 'Kaitlyn Kwong',
    positions: ['Marketing Specialist'],
    linkedin: 'kaitlyn-kwong-6136212aa',
  },
  {
    name: 'Hai-Nam Le',
    positions: ['Marketing Specialist'],
  },
  {
    name: 'Aine Kim',
    positions: ['Marketing Specialist'],
    linkedin: 'aine-kim-71a3923a9',
  },
  {
    name: 'Ayan Jinobi',
    positions: ['Marketing Specialist'],
    linkedin: 'ayan-jinobi-721754391',
  },
  {
    name: 'Ruby Waters',
    positions: ['Marketing Specialist'],
  },
  {
    name: 'Jaden Kang',
    positions: ['Marketing Specialist'],
  },
   {
    name: 'Dhruv Athalye',
    positions: ['Web Developer'],
    linkedin: 'dhruvathalye',
  },
]

export { team, exec }
