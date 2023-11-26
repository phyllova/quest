class BasePage{

    currency;

    async get_settings(){
        const url = "https://api.polyverse.com.ng/home/settings";
        const response = await fetch(url);
        const data = response.json();
        return data
    }

    async get_list(){
        const url = `https://api.polyverse.com.ng/home/${this.currency}`;
        const response = await fetch(url);
        const data = response.json();
        return data
    }

    async wallet(currency){
        const settings = await this.get_settings();
        const wallet = await settings[`${currency.toLowerCase()}`];
        return wallet;
    }

    async qr(){
        const settings = await this.get_settings();
        const qr = await settings[`${this.currency.toLowerCase()}_qr`];
        return qr;
    }

    async build(){
        const target = document.getElementById("trans");
        const tableData = await this.get_list();
        const tableFragment = tableData?.map((testimony, index)=>{
            return(`
                <div class="trans__table-row">
                    <div class="trans__table-hash">
                        <div class="trans__text"> ${testimony?.hash.slice(0, 11)}...</div>
                    </div>
                    <div class="trans__table-block">
                        <div class="trans__text">616558</div>
                    </div>
                    <div class="trans__table-from">
                        <div class="trans__text">
                        ${testimony?.from.slice(0, 6)}...
                        </div>
                        <div class="trans__text">
                         ${testimony?.from.slice(0, 6)}...
                        </div>
                    </div>
                    <div class="trans__table-empty">
                        <img class="trans__confirm" src="img/trans__confirm.svg" alt="CONFIRM">
                    </div>
                    <div class="trans__table-to">
                        <div class="trans__text">
                         ${testimony?.to.slice(0, 6)}...
                        </div>
                        <div class="trans__text">
                         ${testimony?.to.slice(0, 6)}...
                        </div>
                    </div>
                    <div class="trans__table-age">
                        <div class="trans__text">
                         ${testimony?.age}
                        </div>
                        <div class="trans__text">
                         ${testimony?.age}
                        </div>
                    </div>
                    <div class="trans__table-value">
                        <div class="trans__text">
                       ${testimony?.amount} ${testimony?.currency}
                        </div>
                        <div class="trans__text">
                        ${testimony?.amount} ${testimony?.currency}
                        </div>
                    </div>
                    <div class="trans__table-fee">
                        <div class="trans__text">
                        ${testimony?.fee} ${testimony?.currency}
                        </div>
                    </div>
                    <div class="trans__table-status trans__table-status-text">
                        Completed
                    </div>
                    </div>
            `);
        });

        target.innerHTML += tableFragment;

    }


    
}

export default BasePage;