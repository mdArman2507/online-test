const questionObj = 
    {
      category: 'Food & Drink',
      id: 'qa-1',
      correctAnswer: 'Three',
      options: ['Two', 'Three', 'Four', 'Five'],
      question:
        "How many pieces of bun are in a Mcdonald's Big Mac?",
    };
    const{correctAnswer,options,question}=questionObj;
    let score=0;
    const questionEl=document.getElementById('question');
    const optionsEl=document.getElementById('options');
    const scoreEl=document.getElementById('score');
    questionEl.textContent=question;
    
    const shuffledOptions=shuffleOptions(options);

    shuffledOptions.forEach((opt) => {
      const btn=document.createElement('button');
      btn.textContent=opt;
      optionsEl.appendChild(btn);

      btn.addEventListener('click',() => {
        if(opt === correctAnswer)
        {
          score++;
        }
        else
        {
          score=score-0.25;
        }
        scoreEl.textContent=`Score ${score}`;
        questionEl.textContent="compted";
        optionsEl.textContent="";
      });
    });

    // shuffle the options
    function shuffleOptions(options){
      for(let i=options.length-1;i>=0;i--)
      {
        const j=Math.floor(Math.random()*(i+1));
          [options[i],options[j]]=[options[j],options[i]];
      }
      return options;
    }
