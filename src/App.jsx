import React, { useState } from 'react'
import Navbar from './Component/Navbar/Navbar'
import { questions } from './FAQ/questions'
import SingleQuestion from './FAQ/SingleQuestion'

export default function App() {
  const [cards] = useState(questions);

  return (
      
    <>
    <div className="App">
    <Navbar/>
    </div>
    
    <section className="max-w-xl mx-auto py-10 px-4">

    <img  src="./faq.PNG" alt="faq"></img>
    <section className="max-w-xl mx-auto py-10 px-4"></section>
        <section className="grid grid-cols-1 gap-4">
          
        
          {cards.map((card, index) => (
            <SingleQuestion {...card} key={index} />
          ))}
        </section>
      </section>
    </>
  );
}
