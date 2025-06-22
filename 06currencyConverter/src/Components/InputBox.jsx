//input box of project --is component ko reusable kaise bnaye
//isk lie pehle lgega basic component ka design
//fir notes
//sare components ko uppercase krna chahie
//mera app crash na ho islie bydefault ek empty currencyOption{} hmne de diya h ki in case api response na de to empty aa jaye
//ho skta h onAmountChange me koi value na ho islie && use kiya h agr pehla sahi hua tbhi uski value nikale
//agr perform ance lani h loop k andr elements ko access krne k liye jsx me to key deni padegi
//hm jo label use kr rhe vo hr baar repeat hoga hr baar uski value change hogi to isko optimise krne k lie use kr skte useId
//useId is used for generating unique IDs that can be passed to accessibility attributes
import React, {useId} from 'react'

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    className = "",
}) {
   const amountInputId = useId()

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountInputId}  className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                >
                    
                        {currencyOptions.map((currency) => (
                            <option key={currency} value={currency}>
                            {currency}
                            </option>
                        ))}
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;