# Welcome to: CUNY Flow

<img src="https://i.imgur.com/MuTKE11.png" alt="drawing" style="width: 100px; height 100px;"/> <br>

## Table of Contents
- [Website Description](#Website-Description)
- [Website Background](#Website-Background)
- [Website Technology](#Website-Technology)
- [Website Features](#Website-Features)
    - [Sign In/Sign Up/Register](#Sign-In/Sign-Up/Register)
    - [Home Page](#Home-Page)
    - [Question Page](#Question-Page)
    - [Add New Question](#Add-New-Question)
    - [Comment on a Question](#Comment-on-a-Question)
    - [Markdown Support](#Markdown-Support)
- [Future Features](#Future-Features)
- [Wrap Up](#Wrap-Up)
- [License](#License)

## Website Description
<p>
    Hello 👋, my name is Leandro Gamarra. Welcome to my latest project, CUNY Flow. This is an application I built as a <b>CUNY Tech prep Full stack student</b> in the Fall 2022 Semester. I led a team of 3 in building a Stack Overflow like website where CUNY Students are able to submit questions regarding programming or college courses, and other students are able to answer these questions. Students are also able to view all questions other students have answered.
</p>

## Website Background
Throughout the Fall 2022 semester, through CUNY Tech Prep, for almost 2 months, we were taught all there is to React and how to implement the back-end for websites. Using this knowledge I was able to lead the "CUNY Flow" team in building this incredible website. In my **role**, I was in charge of both the front and back-end, and my team members, Farhana and Ryan, were in charge of the front-end. Our goal of this application was to create a platform where all CUNY students would be able to ask Computer Science related questions as a lot of CUNY CS courses are some what similar all around. This would also be another way for students to spread their knowledge to others.

## Website Technology
- Front-end: React
- Back-end: MYSQL
        - Express
        - Authentication (Login/Logout/Register)
        - Cookie-parser / body-parser
- Git/github

## Website Features

### Sign In/Sign Up/Register
- <b>Sign In/Sign Up/Register Pages</b>: is where CUNY students would sign in, sign up, or register in order to be able to post/answer questions. <br>
        - Once the user, signs in they are directed to the main home page. The login authorization feature was built using Express, body-parser,cookie-parser, and jsonwebtoken.<br>
            - <img src= "https://i.imgur.com/cKwiqjc.gif" style="width: 700px; height 400px;"> <br>


### Home Page
- <b>Home Page</b>: after a user signs in, they'll be directed to the home page, where they'll be able to see all questions that have been asked by previous users. Each question shows the title of question, date it was posted, and who it was posted by. <br>
            - <img src="https://i.imgur.com/4F0cQon.gif" alt="drawing" style="width: 700px; height 400px;"/> <br>

### Question Page
- If a user clicks on a specific question on the home page, they will be directed to the question page that depicts all details about that particular question. Such details include question title, author, date posted, question description, and answers other students have provided. <br>
        - <img src="https://i.imgur.com/dvnnjPB.gif" style="width: 700px; height: 400px"> <br>

### Add New Question
- The user will be able to add new questions after clicking the "+" button. Once the button is clicked, they'll be directed to a form where they will can submit a question title and a question. After, posting a question, they'll be brought back to the home page and should now see the question they just asked at the top. If they click on the question, they'll see that this new page shows all details surrounding their question. All questions details are stored using MYSQL. <br>
        - <img src="https://i.imgur.com/dC5PgdD.gif" style="width: 700px; height: 400px">
  
### Comment on a Question
- The user will be able to submit a comment if they click on a question from the home page. They would need to scroll to the bottom of the page and write in their answer and press "post your answer". This will add the answer to the current page instantly. This is also handled/stored by MYSQL. Each answer also shows the date the answer was posted and who it was posted by, plus the contents of the answer.<br>
        - <img src="https://i.imgur.com/NYqjtz5.gif" style="width: 700px; height: 400px">

### Markdown Support
- <b>Markdown Support</b>: using react-markdown I was able to support markdown when users go to submit a new question or an answer to a question. They'll be able to create bullet points, links to websites, separate coding question section, bolden sentences, and increase the font-size of a sentence. Through this, you will also see a preview (below the submit box) of how your question would look like before you submit it. This is available when submitting a new question or when answering a question. Once you submit, your answer/question will look the same on your screen, as it did in the preview.<br>
        - <img src="https://i.imgur.com/amE7g60.gif" style="width: 700px; height: 400px"> <br>

## Future Features
In the future, I would like to deply this website and figure out a way to verify if a student is a CUNY student. Another feature I'd like to implement, is the ability to add tags to questions so users would have a better time looking for questions/answers they're interested in. The tags could be of the programming language or college course. Lastly, I'd love to also implement a way to make sure students aren't asking for exam answers as this goes against the rules of CUNY.

## Wrap Up
I hope you enjoyed my latest project. I'll continue working on it.


## License
Copyright [2023] [Leandro Gamarra Montero]

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
