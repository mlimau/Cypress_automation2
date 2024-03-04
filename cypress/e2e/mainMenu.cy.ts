describe('TEXT BOX tests', () => {
  beforeEach('Visit page', () => {
    cy.visit('http://uitestingplayground.com/home')
    cy.viewport(1280, 720)
  })
  it('Name of links is clickable', () => {
    cy.get('#overview .col-sm a').should('have.length', '18')
  })


  it('Name of links is clickable (random method)', () => {
    let arr = []
    cy.get('#overview .col-sm a').each($el => {
      const nameLink = $el.text().trim()
      arr.push(nameLink)
    })
    cy.get('#overview .col-sm a').its('length').then(elements => {
      let randomNumber = Math.floor(Math.random() * (elements - 1))
              

      let randomText = arr[randomNumber - 1]
      cy.log(randomText, 'text')

      cy.get('#overview .col-sm a').eq(randomNumber - 1).click()
      cy.wait(4000)
      cy.get('h3').eq(randomNumber - 1).should('have.text', randomText)
              
      cy.contains('.nav-link', 'Home').click()//back on main page to make a next click
      cy.wait(3000)

    })

  })
     
  it('Click on each link and verifies the title on the redirected page (loop method)', () => {

    let arr = []
    cy.get('#overview .col-sm a').each(el => {//вытягиваем текст из каждого элемента чтобы потом его проверить
      const linkText = el.text().trim()
      arr.push(linkText)//помещаем текст в arr
                    
      cy.get('#overview .col-sm a').its('length').then((linksLength) => {//get the length of the arr
        for (let i = 0; i < linksLength; i++) {//launch a loop ()обозначили Какое количество линков кликнуть
          console.log(linksLength, 'length')
          cy.get('#overview .col-sm a').eq(i).click()//click on each in loop
                

          cy.get('.container h3').should('have.text', arr[i])//check every the text on container
            .and('be.visible')
          cy.contains('.nav-link', 'Home').click()//back on main page to make a next click
          cy.wait(3000)
          //тест провалился на четвёртом элементе так как текст не соответствует Линку (bug)Delay - Delays
        }
      })
    
    })
  })
    
  //This is an attribute selector.It selects elements where the class attribute starts with the string 'row'.
  it('Search all links by ^', () => {//мы нашли общее количество рядов и в каждом ряду методом find нашли класс который нам нужно проверить
    cy.get('div[class^="row"]').each(row => {
      cy.wrap(row).find('div[class^="col-sm"]').should('have.class', 'col-sm')//
    })

  })

  it('Check links text', () => {

    cy.get('.col-sm a').its('length').then(linkLength => {
      for (let i = 2; i < linkLength; i++) {
        cy.get('.col-sm a').eq(i).then(link => {
          const textLink = link.text().trim()
          cy.log(textLink)
          cy.wrap(link).should('contain', textLink)
          cy.wrap(link).should('have.attr', 'href');
              

        })
      }
    })
  })
  it.only('Testing hrefs text', () => {
      
      cy.get('a[href]').its('length').then(hrefLength => {//нашли общее количество href
        for (let i = 0; i < hrefLength; i++) {//Пошли по ним циклoм
          if (i > 4 && i < 21) { //исключили лишнее links
          cy.get('a[href]').eq(i).then(link => {
            const hrefText = link.text().trim()//get the text from href
            cy.log(hrefText, (i), 'Text Link')
            cy.wrap(link).should('contain', hrefText)
          })
        }
        }
    })
  })
   
  })


     

    
