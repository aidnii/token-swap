

export const Main = () => {
    return (
        
        <section className="main" id="main">
            <div className="container">
                <div className="row">
                    <div className="col col-md-6 offset-md-3" id="window">
                        <h4>Quick Swap</h4>
                        <div id="form">
                            <div className="swapbox">
                                <div className="swapbox_select token_select">
                                    SELECT TOKEN
                                </div>
                                <div className="swapbox_select">
                                    <input className="number form-control" placeholder="from"></input>
                                </div>
                            </div>
                            <div className="swapbox">
                                <div className="swapbox_select token_select">
                                    SELECT TOKEN
                                </div>
                                <div className="swapbox_select">
                                    <input className="number form-control" placeholder="to"></input>
                                </div>
                            </div>
                            <div className="gas_estimate_label">Estimated Gas: <span id="gas_estimate"></span></div>
                            <button disabled className="btn btn-large btn-primary btn-block" id="swap_button">Swap</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}