import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useBooksStore = defineStore('books',  {
   state: () => {
      const books ={
        0:{
          id:1,  
          image:"/Book1.jpg",
          name:"How Innovation Works",
          price:  2000,
          author: "Matt Ridley",
          description:"Innovation is a bottom-up, collaborative, and serendipitous process rather than an orderly, planned event. Ridley contends that the secret ingredient to human progress is freedom, and that innovation is fundamentally a team sport.",
          long_description:"How Innovation Works by Matt Ridley argues that innovation is not driven by lone geniuses with sudden breakthroughs, but is a gradual, collaborative, and bottom-up evolutionary process of trial and error.Ridley emphasizes that innovation requires the freedom of open markets to thrive, as it involves the grueling work of turning complex inventions into affordable, reliable products for everyday people.By examining historical milestones from the steam engine to modern computing, the book demonstrates that technologies inevitably emerge when their prerequisite components exist, and warns that excessive regulation and monopolies are the greatest threats to human progress.",
          genre:"Business",
          rating: 4
        },
        1:{
            id:2, 
          image:"/Book2.png",
          name:"The fault in our stars",
          price:1580,
          author: "John Green",
          description:" a modern classic that masterfully explores the complexities of terminal illness, young love, and mortality.",
         long_description:"The Fault in Our Stars by John Green is a poignant young adult novel that follows Hazel Grace Lancaster, a sharp-witted sixteen-year-old living with terminal lung cancer, who finds unexpected love and profound meaning after meeting Augustus Waters, a charismatic cancer survivor, at a support group. Connected by their shared wit and a mutual obsession with an abruptly ending novel, the two embark on a journey to Amsterdam to meet its reclusive author, seeking answers about living an unfinished life. Rejecting typical tragic clichés, the book delivers a beautifully written, philosophically deep exploration of youth, love, and mortality, ultimately illustrating that a brief, limited existence can still hold a lifetime of profound impact and love.",
         genre:"Romance",
         rating:5,
        } ,
        2:
        {
          id:3,   
          image:"/Book3.png",
          name:"5 Ideas from Global Diplomacy",
          price:1280,
          author: "Marvin Cheung",
          description:"a highly practical manual for tackling complex global governance issues",
          long_description:"",
          genre:"Business",
          rating:4,
         
        } ,
        3:{
          id:4,   
          image:"/Book4.png",
          name:"The lightning Thief",
          price:1020,
          author: "Rick Riordon",
          description:" an action-packed fantasy novel where twelve-year-old Percy Jackson discovers he is a demigod.",
          long_description:"The Lightning Thief by Rick Riordan is a fast-paced mythological fantasy novel that follows twelve-year-old Percy Jackson, a boy with ADHD and dyslexia who discovers he is actually a demigod—the son of the Greek god Poseidon. After being accused of stealing Zeus's master lightning bolt, Percy is sent to Camp Half-Blood, a training sanctuary for demigods, before embarking on a high-stakes quest across America to find the real thief and prevent an apocalyptic war among the gods. Alongside his friends Annabeth (a daughter of Athena) and Grover (a satyr), Percy battles legendary monsters, navigates the Underworld, and learns to embrace his unique identity in a world where ancient myths are terrifyingly real.",
          genre:"Sci-fi",
          rating:4,
         
        } ,
         4:
        {
          id:5,   
          image:"/Book5.png",
          name:"The Last Sraw",
          price:1500,
          author: "Jeff Kinney",
          description:"a highly practical manual for tackling complex global governance issues",
          long_description:"Diary of a Wimpy Kid: The Last Straw by Jeff Kinney is a humorous children's novel that follows middle-schooler Greg Heffley as he tries to navigate adolescence while resisting his father Frank's ultimate mission to toughen him up. Tired of Greg's lazy habits, video game obsession, and constant physical awkwardness, Frank signs him up for organized soccer and threatens to ship him off to Spag Union Military Academy for the summer if he does not change his ways. Throughout the book, Greg tries to survive a disastrous camping trip, avoid the looming threat of military school, and unsuccessfully impress his school crush, Holly Hills. In the end, Greg accidentally saves his father from a massive social embarrassment, prompting a grateful Frank to call off the military school plans and let Greg enjoy his summer holiday.",
         genre:"Childrens Fiction",
         rating:3,
         
        } ,
         5:
        {
          id:6,   
          image:"/Book6.png",
          name:"Ugly Love",
          price:1280,
          author: "Colleen Hoover",
          description:"a highly practical manual for tackling complex global governance issues",
          long_description:"Ugly Love by Colleen Hoover is a contemporary romance novel that follows Tate Collins, a busy nurse, and Miles Archer, a closed-off airline pilot, as they enter into a strict, no-strings-attached physical relationship. Miles, who is deeply traumatized by a tragic event from his past, establishes two unbreakable rules for Tate: never ask about his past, and never expect a future together. As their arrangement intensifies, Tate inevitably breaks the rules by falling in love with him, forcing both characters to confront the painful reality that love can be beautiful but also incredibly ugly and destructive. Ultimately, Miles is forced to heal from his past grief to save his relationship with Tate, leading to a story about forgiveness, healing, and emotional redemption.",
         genre:"Romance",
         rating:4 ,
         
        } ,
        6:
        {
          id:7, 
          image:"/Book7.png",
          name:"Atomic habits",
          price:1280,
          author: "James Clear",
          description:"a highly practical manual for tackling complex global governance issues",
          long_description:"Atomic Habits by James Clear is a bestselling self-help book that provides a practical, science-backed framework for building good habits and breaking bad ones by focusing on tiny, 1% daily improvements. Clear argues that true change does not come from massive, overnight transformations, but from the compounding effect of hundreds of small decisions called atomic habits.The core premise is that you do not rise to the level of your goals, but rather fall to the level of your systems. To change these systems, the book introduces the Four Laws of Behavior Change, which explain how to manipulate cues, cravings, responses, and rewards to effortlessly reshape your everyday routines and identity.",
          genre:"Self-help",
          rating:4,
         
        } ,
        7:
        {
          id:8,   
          image:"/Book8.png",
          name:"Valley Of the Dolls",
          price:1280,
          author: "Jacqueline Susann",
          description:"a highly practical manual for tackling complex global governance issues",
          long_description:"Valley of the Dolls by Jacqueline Susann is a fast-paced 20th-century drama novel that follows the lives, loves, and tragic downfalls of three ambitious young women trying to make it big in postwar New York City and Hollywood. Anne Welles, Neely O'Hara, and Jennifer North each achieve fame and fortune in different sectors of the entertainment industry, but they quickly find themselves trapped by toxic relationships, cutthroat industry standards, and brutal isolation. To cope with the overwhelming pressure and heartbreak of their careers, all three women become dangerously dependent on dolls—a slang term for prescription sleeping pills and amphetamines. Spanning twenty years, the book serves as a dark exposé of show business, showing how the glittering promise of fame can easily deteriorate into a cycle of addiction and self-destruction.",
          genre:"Drama , Pop-fiction",
          rating:4,
         
        } ,
        8:
        {
          id:9,   
          image:"/Book9.png",
          name:"People we Meet On Vacation",
          price:1600,
          author: "Emily Henry",
          description:"a highly practical manual for tackling complex global governance issues",
          long_description:"People We Meet on Vacation by Emily Henry is a contemporary romance novel that follows two polar-opposite best friends, Poppy and Alex, who attempt to repair their fractured relationship during a week-long summer trip. Poppy is a wild, free-spirited travel writer living in New York City, while Alex is a quiet, routine-loving school teacher who still lives in their small hometown. Despite their massive lifestyle differences, they shared a decade-long tradition of taking a spectacular vacation together every summer—until a mysterious falling out two years ago ruined everything. Desperate to recapture the happiness she has lost, Poppy convinces Alex to take one more budget trip to Palm Springs, forcing them to confront their buried romantic feelings and the painful truth behind why their friendship fell apart.",
          genre:"Contemporary Romance",
          rating:5,
         
        } ,
        9:
        {
          image:"/Book10.png",
          name:"A Doll's House",
          price:1350,
          author: "Henrick Ibien",
          description:"a highly practical manual for tackling complex global governance issues",
          long_description:"",
          genre:"",
          rating:4,
         
        } ,
        10:
        {
          image:"/Book11.png",
          name:"Rich Dad Poor Dad",
          price:1350,
          author: " Robert Kiyosaki",
          description:"a highly practical manual for tackling complex global governance issues",
          long_description:"Rich Dad Poor Dad by Robert Kiyosaki is a classic personal finance book that challenges conventional wisdom about money by contrasting the financial mindsets of the author's two father figures. His biological father (Poor Dad) was a highly educated academic who believed in working hard for a steady paycheck but struggled financially, while his best friend's father (Rich Dad) was a wealthy entrepreneur who dropped out of school but mastered the rules of money. The book emphasizes that financial independence is not achieved by earning a high income, but by building a system of income-generating assets like real estate and businesses. Ultimately, Kiyosaki argues that true wealth requires financial literacy, mastering the difference between assets and liabilities, and shifting from the mindset of working for money to making money work for you.",
          genre:"Self-help, Motivational",
          rating:4,
         
        } ,
        11:
        {
          image:"/Book12.png",
          name:"The Psychology of Money",
          price:1350,
          author: "Morgan Housel",
          description:"explores how personal financial success is driven more by human behavior, emotions, and soft skills than by mathematical formulas or intelligence.",
          long_description:"",
          genre:"",
          rating:4,
         
        } 
      }
       const selectedBook = ref(null)

       return{
           books,
           selectedBook
       }
   },
   actions:{
       updateSelectedBook (payload) {
           this.selectedBook = payload
       },
   },
   persist: true,
})