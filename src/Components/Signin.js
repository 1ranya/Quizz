import React from 'react'

export default function Signin(props) {
    

    return (
            <section className="hero hero-signin is-fullheight">
                <div className="columns">
                    <div className="column">
                    </div>
                    <div className="column">
                        <div className="container has-text-centered formSignin">
                            <div class="field">
                                <label class="label formSignTitle">Username</label>
                                <div class="control has-icons-left has-icons-right">
                                    <input class="input is-success " type="text" placeholder="Text input" value="bulma"/>
                                    <span class="icon is-small is-left">
                                    <i class="fas fa-user"></i>
                                    </span>
                                </div>             
                            </div>
                            <div class="field">
                                <label class="label formSignTitle">Email</label>
                                <div class="control has-icons-left has-icons-right">
                                    <input class="input is-success " type="text" placeholder="Text input" value="bulma"/>
                                    <span class="icon is-small is-left">
                                    <i class="fas fa-user"></i>
                                    </span>
                                </div>             
                            </div>
                            <div class="field">
                                <label class="label formSignTitle">Password</label>
                                <div class="control has-icons-left has-icons-right">
                                    <input class="input is-success " type="text" placeholder="Text input" value="bulma"/>
                                    <span class="icon is-small is-left">
                                    <i class="fas fa-user"></i>
                                    </span>
                                </div>             
                            </div>
                            <div class="field">
                                <label class="label formSignTitle">User caption</label>
                                <div class="control has-icons-left has-icons-right">
                                    <input class="input is-success " type="text" placeholder="Text input" value="bulma"/>
                                    <span class="icon is-small is-left">
                                    <i class="fas fa-user"></i>
                                    </span>
                                </div>             
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    )
}
