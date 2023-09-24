const questionObj = 
    {
      category: 'Food & Drink',
      id: 'qa-1',
      correctAnswer: 'Three',
      options: ['Two', 'Three ', 'Four', 'Five'],
      question:
        "How many pieces of bun are in a Mcdonald's Big Mac?",
    };
    const{correctAnswer,options,question}=questionObj;
    const questionEl=document.getElementById('question');
    const optionsEl=document.getElementById('options');
    const scoreEl=document.getElementById('score');
    questionEl.textContent=question;
    
    options.forEach((opt) => {
      const btn=document.createElement('button');
      btn.textContent=opt;
      optionsEl.appendChild(btn);
    });