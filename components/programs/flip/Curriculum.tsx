import Link from 'next/link'
import React from 'react'
import CurriculumSection from './CurriculumSection'

export default function Curriculum() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-20 sm:px-6 lg:px-8">
         <CurriculumSection
         title="50 Things You Shouldn't Learn the Hard Way"
         darkerBg={true}
         imageLink="https://static.tildacdn.net/tild3533-6633-4363-b561-623239313561/og-image-50things.jpg"
         caption="A Teen's User Manual for Money"
         folderLink="https://moneymanual.org/"
         content={
           <p>
             Written by teen author Deniz Yaveroglu and published by YEI
             Press, <b>A Teen's User Manual for Money</b> is a free online
             handbook covering 50 essential financial literacy concepts —
             from paychecks and credit scores to investing and taxes — in
             plain, accessible language with no finance background required.
             Read the full handbook{' '}
             <a href="https://moneymanual.org/" target="_blank" className="green-link">
                here
              </a>
             .
           </p>
           }
         />
        <CurriculumSection
          title="AP Business with Personal Finance Curriculum"
          //slideLink="https://docs.google.com/document/d/1gwDgAPGvQER0twN0w0UeBGROEPogpJ6O36ZVu-fcNZs/edit?tab=t.0"
          folderLink="https://docs.google.com/document/d/1gwDgAPGvQER0twN0w0UeBGROEPogpJ6O36ZVu-fcNZs/edit?tab=t.0"
          content=
          {
            <p>
            "Have you ever wondered what it actually takes to run a business or how to protect your money and 
            data in an increasingly digital economy? You can learn that and more with the YEI AP Business with 
            Personal Finance curriculum! By using our tailored slides paired with personalized simulations for every 
            unit, you'll learn business and personal finance concepts at the AP level while applying them to real-world decision-making scenarios. 
            The course spans 5 units, starting with a detailed multi-part introduction, each built around a slide deck followed by a 
            hands-on simulation guide to lock in content. This course is designed to be taught over a semester. By Satya Dindi, Deniz Yaveroglu."
            
          </p>
          }
        />
        <CurriculumSection
          title="9-Module Middle School Curriculum"
          darkerBg={true}
          content="Seeing the need for financial literacy exposure at earlier stages in
        the school system, the FLIP team, led by Saqib Saiyed and with Alex
        Xie as the curriculum designer, has worked to develop this 9-module
        Middle School Financial Literacy curriculum for free use around the
        world. This course has no requirements or prerequisites, so feel free
        to start your financial literacy journey with these lessons! For more
        in-depth FinLit learning, schools can use our 16-week High School FLIP
        curriculum below."
          slideLink="https://docs.google.com/presentation/d/e/2PACX-1vTGYfIoP4N5xo-WB3wDmGw0ogikHYvEAjJ4GK8096g1XKFJ4ybA6PlA_G1pHTTAn5dx6NFQQkOQxgUs/embed"
          folderLink="https://drive.google.com/drive/folders/1U2G8m_cr2rwGYTsDKvGPImbmX2jPsUGV"
        />
        <CurriculumSection
          title="16-Week High School Curriculum"   
          folderLink="https://drive.google.com/drive/folders/1LkHpqZE3igG7tkEGAM8XoxozgSuO7CB0"
          slideLink="https://docs.google.com/presentation/d/e/2PACX-1vRtiO_Jb6KgAQwLIeCIQ8l7tSfrYPv_JpEuB-X0F2dRH02QcJv4mfkdD20W-8zYZoKF5zSLUzV_yu4g/embed"
          content={
            <p>
              While EconClubs must apply to be accepted to our FLIP program,
              every YEI EconClub is provided with the{' '}
              <b>16-week FLIP curriculum</b>, which can be used to teach club
              members about financial literacy. The FLIP curriculum has
              approximately 30 hours worth of content and covers topics such as
              budgeting, loans, credit and debit cards, 401(k), retirement,
              interest, savings, investing, and insurance. retirement, interest,
              savings, investing, and insurance.
            </p>
          }
        />
        <CurriculumSection
          title="FLIP Net Price Calculator"
          darkerBg={true}
          slideLink="https://docs.google.com/presentation/d/1Sem27iYDqh21a8BQMtuoyj97uKdsN4YB6U5UyvSGEmc/embed#slide=id.g4dfce81f19_0_45"
          content="To further support college-bound students, the Youth Economics Initiative FLIP Department has made a Net Price Calculator Guide to help students with their college financing needs. Created by FLIP Partnership Manager Prasanna Chandankhede, this guide is intended to demystify college financing resources options."
          caption="Preview of Net Price Calculator"
        />
        <CurriculumSection
          title="Financial Literacy in the Age of AI & Digital Money"
          //folderLink=""
          slideLink="https://docs.google.com/presentation/d/1BraTKVxccaYmnoXqS18Q-oUEO3lz_8jAIuldcCNdQWQ/embed#slide=id.g11a1ccd9bf3_0_102"
          content="Recognizing the massive shift toward digital money and artificial intelligence, the FLIP team has developed a brand-new 7-week curriculum — Financial Literacy in the Age of AI & Digital Money — to prepare students for the future of finance. This 7-week course, designed by Sricharan Bala (FLIP Curriculum Manager) under Prasanna Chandankhede (VP of FLIP)'s supervision, introduces students to the essentials of digital finance, AI, and fintech, helping them understand how technology is reshaping money and opportunity."
        />
       
      </div>
    </div>
  )
}
