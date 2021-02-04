import {React, useState} from 'react'
import Questions from '../Questions'

export default function Addquestion(props) {
    const [question, setQuestion] = useState("")
    const [action, setAction] = useState("")

    const handleQuestions = ({target}) =>{
        if(target.name == "question")
            setQuestion(question=>question = target.value)
        if(target.name == "action")
            setAction(action=>action = target.value)
        
            console.log("question value ", question, action)
    }
    const handleValidation = () =>{
        console.log("length ",Questions.length)
        let id = Questions.length + 1
        console.log("Actions ", action)
        Questions.push({"id":id, "action":action, "question":question})
    }

    return (
        <>
            <section className="hero hero-addQuestion is-fullheight">
                <div className="container has-text-centered formQuestion">
                    <div class="field">
                        <label id="actionTitle" class="label">Action à faire</label>
                        <div class="control has-icons-left has-icons-right">
                            <input class="input is-success" name ="action" type="text" placeholder="Action" value={action} onChange={handleQuestions} />
                            <span class="icon is-small is-left"> 
                                <i class="fas fa-exclamation"></i>
                            </span>
                        </div>
                    </div>
                
                    <div class="field">
                        <label id="questionAposerTitle" class="label">Question à poser ?</label>
                        <div class="control has-icons-left has-icons-right">
                            <input class="input is-success" name="question" type="text" placeholder="Question" value={question} onChange={handleQuestions}/>
                            <span class="icon is-small is-left"> 
                                <i class="fas fa-exclamation"></i>
                            </span>
                        </div>
                    </div>
                    <div className="button" type="submit" onClick={handleValidation}>Validate</div>
                </div>
            </section>
        </>
    )
}
