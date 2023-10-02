//reuse footerForm

document.getElementById('footerNewsletter').innerHTML = `
<div class="footerNewsletter">
            <div class="containerFooter">
                <div class="footerForm">
                    <div class="footer-title">Join The Crew</div>
                    <div class="footer-form-block">
                        <form action="https://lostcitync.us5.list-manage.com/subscribe/post?u=37cf08f530a4910de4346cf10&amp;id=61dd4f612a&amp;f_id=006d31ebf0" method="post">
                            <input class="emailInput" placeholder="enter email" type="email" id="emailInput" name="EMAIL">
                            <button type="submit">submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        `;