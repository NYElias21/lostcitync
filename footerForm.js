//reuse footerForm

document.getElementById('footerNewsletter').innerHTML = `
<div class="footerNewsletter">
            <div class="containerFooter">
                <div class="footerForm">
                    <div class="footer-title">Join The Crew</div>
                    <div class="footer-form-block">
                        <form action="" method="post">
                            <input class="emailInput" placeholder="enter email" type="email" id="emailInput" name="email">
                            <button type="submit">submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        `;