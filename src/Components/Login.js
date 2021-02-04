import React from 'react'

export default function Login(props) {
    

    return (
            <section className="hero hero-login is-fullheight">
                <div className="container has-text-centered formLogin">
                    <div class="field">
                        <label class="label formTitle">Username</label>
                        <div class="control has-icons-left has-icons-right">
                            <input class="input is-success " type="text" placeholder="Text input" value="bulma"/>
                            <span class="icon is-small is-left">
                            <i class="fas fa-user"></i>
                            </span>
                        </div>             
                    </div>
                    <div class="field">
                        <label class="label formTitle">password</label>
                        <div class="control has-icons-left has-icons-right">
                            <input class="input is-success " type="text" placeholder="Text input" value="bulma"/>
                            <span class="icon is-small is-left">
                            <i class="fas fa-user"></i>
                            </span>
                        </div>             
                    </div>
                </div>
            </section>
        
    )
}
