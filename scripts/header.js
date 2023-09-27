// scripts/header.js 

// const { access } = require("fs");


// Analog Clock
setInterval(() => {
    var date,
        hr,
        min,
        sec,
        hr_rotation,
        min_rotation,
        sec_rotation;
    date = new Date(); //object of date()
    hr = date.getHours();
    min = date.getMinutes();
    sec = date.getSeconds();
    hr_rotation = 30 * hr + min / 2; //converting current time
    min_rotation = 6 * min;
    sec_rotation = 6 * sec;
 
    hour.style.transform = `rotate(${hr_rotation}deg)`;
    minute.style.transform = `rotate(${min_rotation}deg)`;
    second.style.transform = `rotate(${sec_rotation}deg)`;
}, 1000);


// Banner: Hidden Icons (inspired by The Impossible Quiz, circa 2007)
const hiddenImages = [
    {
        image: 'Coffee',
        src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACRElEQVR4nO2ZTUuVQRiGr7JCTAkMLCj8AfZBoIsIAiuiRat+QEG7CvpcVkgGGbSxfS0koq1BREspLeljEX2CaYsgaJMISuRCJwbuYJA5uXCe98zYuWAWZ56XuZ/7zDsPM/NCg/+Tl8A4hbMJcMAvCqdLRiYpnEsyMkTBbAa+ycheCqUNeCoTjyLxcRWBrGkHXsnElGYmZKNiM2RMK/BWiX4BOiPP7Ffcm82W+0rSm9lS45V7rWfOkSl7lOAPYNsyr5w32kym3FGSlyOx9cCY4hPAdjJmQonujsROKfYJ6CBzZpWsf4Vi5dbHDlIAI8CLGrFpGfGLvWhGgWf1TqJBjjzXO15FG7U04ipuZpgLiFVnxAXtO3AT2JBSwBr3jzaQUsAaF9HZF8yMiYAFLqLTor7fVgIWuIhOp/p+WglY4CI63er7aCVggYvoHFffQysBC1xEZ1h9560ELHBLdPz5ZUFXrh0lGukCrsqA/30ltYA1bklbBG4Ba1IJzFRwwmsNkv8M3AV6Uou8C6bcil3BBYUZD1JWjhpclMY9Qw2OSsTPzFqD8ZuAD9I4hiHrgK8SOm0w/tngg5A3ZcohLUS/eetNPO68xj5CRQwEO9EzK/z3mjQT8xrzBhVzLajz74ELwA6Vz+Xwz+zUwv67Jny7vhpuTUxvVaYzMOBSnEOeaJBB6sdt5fB4JYMcUBXxO88TVM9JaS+mqJDhovaHmsPGe602ld+RQLcv1eD+A81cHdbFrLSTslXl8Y2xqTl9KO2XZgNK5Q8HenRr3z/ZkwAAAABJRU5ErkJggg=='
    },
    {
        image: 'Bike',
        src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADmklEQVR4nO2YOWhVQRSGP7O5r9goqJ2IBhTEwkI0YOOCRjEKFhJsxD2xEhvRQoOggkulhRi3ylJEOwUR3HdNTERR1MYtcddEJvwjk5c7903ue94g3B+Gd+8s5z9nzsw5513IkCFDhgwZMvQJbgJ3genAWGAkMIz/1JBOT7uclhLHgbfAO097GCDD7P5e4CnwMcKY0SnYwY8I4p/AG+ACsKAA2dclbyYp4BrwHjgFNIm4tkiyj0neWlJAqfO8UsTNQFkRZNdJ3lFShjHqcRG9MkeybtEHWBUTgZK2H8CAtA2p/QeGdAKz0j5aTxzypwXclYM5hmwjRax2LntzAXdli9a2K7+Y5/OkhHKgxVG+NqFXTN75BfwGqoExktNWpEhIBbBc+eKxdqtdO98IHMoJvWUJvDID+Kw19c4GvVRfi8NrdDgpnYxuQVjq7Ha+tsdZV9uLvDIBeK35h9VnPPIsgNN4fUmc8BIpZhfcATYBk4HBwCBgInDamdMB7NDaUK8MB+5r3jl5YZ8j861+r4rXtCnAZlXNdl6DeHvAGvENWOOZ5Cp7VnWWed4Z6JVy1WR2o4YC+/X+FVgPjFIuMW1ExGavlY7WmB7HyRoxO2Y3cxWdL2OMZxYGeOWIxl4B43RErBFVzryL6jdlkK8KsMaYI9mFCudOGE/44FPShs9H2jGfV7Y6Ydb8qeoPPPcUihvUfyZGn3UOj/F0VySwro48c4JPwVKnEl7iMbhGXjNhdrH6VmjO7Qje8Zr/ISZKGd57krEMhdhOXWwf8h2ZzRo7EmG0KTe+5IRZtNud2tko3ND43ICK+QROmWGikw/5LvFUjd+LMPx7Tpi1aFX/JA/ndo0fiNFriuaYPMMnvZgI4oMt15O2cxEbYL000MM5TeMmt/gwVHM+hRpyqQAjrnhkh/DeBl7E3N1uhoQcrXyolIyQjw8WIbyDYjzm8nYdrZN6MRc2KTZJhvnKEopi8NZLRqMbfu/mCb8+lDglhw2tISiUt9Th7Qq/FSrEohJTCDZqbWsvS+9CeTdobZNNiDilwjel/1DMdUqFeQmUScpbpbBukuai3MEGR+i6nE8/uSiRJ75qze4ERiThLZUnbG7a5VPOCrXJrU5JZ4jK6Upd7AdOGW+q5n4FGJKPd4h465070SEjYu9WtZOV41pzlFsLQChvU294yxUJTqiqbVPV+kShrqZY/6kDeNuUnxo19vdiZ8iQIUOGDBnojj9dy789FN0xZAAAAABJRU5ErkJggg=='
    },
    {
        image: 'Ramen',
        src: 'data:image/png;base64,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'
    },
    {
        image: 'Złoty',
        src: 'data:image/png;base64,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'
    },
    {
        image: 'Cat',
        src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAACgUlEQVR4nO2aO2sVQRiGnygYEEU5aQKeiJ2Ct1RefoCNiMTCLqbQzltiBFFRLNKIiqidYGOZEEFM1EI7L2ghQlS0MoKJNxS8Y/CyMvAFDsvZS87u7JnZfA+8zdn5YN93ZnfmzCwoiqIoiqIoiqIoiqIoiqI0n93AINCWsn2btDd13jMf+AQEwBhQSWhfkXaB1Jl6r+kSM9MaSmg/FGpv6r3mdMjQTHUKz7mRMQBT7zVPMwbwBM/5kDEAU+813zIG8BXP+V1jZhRYAlTrvBuirpn60oyAas3vHaEAoq59wXPGMgbwGM85GZrSqmLwZp3prt61ATynA/jV4Avwe2hkeMvBBgPow0HmAauA7cAR4AIwDNwDXgATwOeMU5/ReRyhCvQAl4HnoWnNhj4Cu5ptuhM4Iz1qw+Q+4JaMlilgErgN9AKLmmW6BdgGPLDcw0bO0SnPcFCQjgIbgHZgruwALZcOGJBO2FyU+R7gZ4Hm02pHEeYPOWA0Svttm+8G/jlgNEonbJpfKn8zA4d1zmYAVx0wmCSz7rDCaseH/rRGbAVw0QFzaXTHhvk5wFsHzKXRs7zNrwCuOWAsrd7kaX6no4udOJn7zYVeB8w0qtdyVHYA2Ai0ztT8JuCvA0byktlZui/HZWuSzLcCrxy4aVv6A/QnPfdByWVG9/qoAK47cINF6FJUAO8cuLkiNB4VwFRM0WhZtpvjeB8TQOnNI2vpqACWMQs4HhPAXWCdbISWlvYUy19z8vpQVlvmW549wBZgJbCAEnA4h0OKR8AV4Kzs020F1gKL8YAW2VmxMf2Yb3/wJYT+nM7ranUMz6gAe2UN8BL40aBxczZoVpkLm22oHv8Bm3qPe9q0jnQAAAAASUVORK5CYII='
    },
    {
        image: 'Cards',
        src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEOUlEQVR4nNWaa4hVZRSGn8aZUUOLoCTTCdGsyB9lhvgjECYLzRkpxOhHdqFQJBAFMwkskQJBCUYUBiIUtR9hdhutoCDESVBLRRK6eKkc0hlvKWhjaEeWvSc+Nnvv+fbl7D3zwsfss8/63jXv3t9trXXgP4wGtgIXgUpBzXxtA8aTE+4DzhYoINjM96g8hHwswo68CD1hvrbL94d5EF4UWZEiqmiS77/yIKuo1RLjgKvAxFr6rxQg5E3gFLA6xv8tA0HIz0AL8AdQF+H/CvAVsCDtMK+1kMnAfl3vA6bGCKmo/QvsBd4AJvQXIW3Aa7peArRH+L8ZaAU2afK7S/Qx8UwDGsoQUg90a2h9r79ngMY+/DcC0yX6z4CoHuB9YBYwtCghM4BOYKzTOjVffP3XAVOAVcBPAVH2UJ4rQshmYH7gnn3e4nxO6v9+YBnwgzOfnkxDlDd8/NcDz4bMj+Xq+50vUS3h43+VbIIHzNt0/5IvUdyTalez6zToy/9M4AjwC/Bg4LsH1PeED1EUBgMfOf07gquIJ+L8NwFdwCQtEjbpXSxT3w19EUVhELAj5Ej+hb7LQ0gDsBt4VZ+/AZoDNrvV96m0QtbExBfv5iRkjQ6a64HHgC8Dy/adwDXgsjbTxEJaPIKl1oxCZmk3t9PyQuBr4B/gGcdmnvp9GkcUh04PIbsyCnkBeDhw7z3dr6I6tF9KK+S0h5CejELC0KaTsWE40Kuhd3taIdXwNK79/7o94Ot/mOaFYY767ExDhJNx2a43c0QHQVvjj+veZ8BdNRDi4gP1WezezLIhDlbkZ0NpSEqOpP4bgPPqMzYLkYvnnf5zU3Ik9f+E7A9mJXKxx+lv8UYaJPW/XvYrshK5uMOJM+w6DZL4v0nnqkrI8jwgTr9u/G+2v0vUgBXyjmzbshLVAkn8H5Ztsw/Rlojw1MLWMoXcI7tzUZmUIFFLRMLAEgllClkiu82+RI3KTrgpnO4MEWBeQnbJbnYSonY9AcPrUZOrQCEjdEDs1YHRm2iq0ptoB7Vlr0whr8jm86REtkb/pgDp17A1u2AhHbJ5OQ3Rah0IrSRAiUKGAX8rrB2RhmiixqUVacoUMlvf28oZiwsytDijP5beNsmmuvhEYpsMdxQspknpo4pK42GodyrOfZaxx2vfqJTUzmrXDkOzbH70fTqjVCKuDrMi2gW9iSgRhrWyfZuccLfySB3KL7n/0GEFOZbWzBvH5eORGnDfyIDP0SQM/uTjqE4Bj4YUPZNikji7aryP3cAQ1fXsnz8ZEHVaYluVpEiKleJZR8Go05sIK5Fd0rC0ZMWtnnyH1PdxSsZDwFvAgYCoXiWkLcYZGdF3nGzPx1Vxy8AYYBHwrU4LVVHXVBpYCtwrWxuGn7h1j/4Ky9W+qLTq5cDb6nKSb7bbxy3N/QpW13ga2OhsyvaWLIiy35F54zpuCTEoIM7TcgAAAABJRU5ErkJggg=='
    },
    {
        image: 'Chicago',
        src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEH0lEQVR4nO1YW4hNYRT+mBmMcSkhuYRxKbfIiAxeUMxILnnhBW9k3MYlhUjkjTx5QzSI8iCXPHjiNOTaIAySexmS3D34terbWrPPv/fZ/z77nM7JfLWb2Wutb51/7b3W+te/gTYUD64DaAy5LxoYXkH3RQPTFkhucD1uahfaGzFxf7/oA0kpUtB1BflPJeMaSKYg8vVmTLYZkYnQFsj/9kZSSdWobaGpPBa9SapGbYb5LHqTVEaEBRLL4f8WSMohrbzraqEFUhYjCMOrpJAC6UJfXxw4X8mpSOLVJtW9etJPiwOnhRzhtkLcIJJ4M/3p45UD5zU5/YICcUUSgQyljycOnGfkVBZSIKPp474D5wE5IwspkAn0cdOBc4uc8UktyJVXy1qQq4ay4QDeseFEhdecqrNdUFzeK8V5qeQdAExx8HOZPqZnuyAXnmx4iwAcBfBHceT/Y9SJjQsu0EdNnAXZYON56SNPfBuAxxHadzOA7Za0C8IZ8hbkMhCdPkZ1pDXsMhW8RgFYC+Cexf5lht89TrvFuQzkhZL/ArAKQPsQHzIv1dHW44mPMBym3bJcBrJVBTHTwdcMFYykWRgO0m5FlAVFgZ9XCuAhZatj+FutaiasAeyn3bpMC4oKcfhc3S+gnwdhI3YISlhPht0sCHtpsyUXO7TO3fosfKynD2nNQdhJmx1+he080AnAXABH+IQ/0+4z7w9T31FxlgL4AWBswALmcHINa7Gj1YMNsttCvbyZtPl+ospzydWPEUf4D+w6whOMA9DZcWfX6BqhFa+jTlK7FUbw7wAAd5STawA2AKgC0JejRF/eb+Q3Ws/2NvlRzhGG/9vQLUIgK6iT7pUG2aze0EB249mIhhp2GUN+2mhNlAP4rhb4nTI/xviCsK1jOfWH/IoePNgYDmTd4QZJh4vkSxfrFRCw6G/wMgGL3BS0SIUltGnwK06rH5Eij4NyninEzymL/gB1u3gZyjRK1aFpfshveW1eZq5/mEahdJtByA6V9CP+pvp0zeoMMVltfBr1lD9SzcOGWtqd18IGCvchGey37ANDKPvITa+E3c5QJ5DU+x1xRJmuyiCtk0j/TgJjLF9F6ig7qWQnKBOdYIfD0FhNu1anyp8USsH6IU9uIYCz/HIhneYpa0oKtV1I+5QU83COMtkwwX1mO2WiE0xyGOOrbOd87zwwz5LvjRk2w0vcV2yF2MR7aR7feCLsQ5lX0IY6sWnPtTyP0PpHqXNOWoG9ZRHJJ8xZKuXkNa8EMJidaRiAzQDeK/1M8ubQj563ZvFevnwIBgL4BOCu8iE2LvBqTrLjH8r4ZG1P/DJTxYbe/Fwa9KZKfcW/x+Jjd9CoEffrZAcOYs2sgyZOoSIPQ0eOKvfJa6YfzXsU0I5Bmdduc/29uA3IF/4C1mdY157y9JgAAAAASUVORK5CYII='
    },
    {
        image: 'Ballet',
        src: 'data:image/png;base64,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'
    },
    {
        image: 'Music',
        src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA+klEQVR4nO3WMUpDQRDG8R8pXkhpoQewU6y08QCewNLCMncQL2AhhuQElmKZUgsLGy/gCcQICWiljWDkQYogvs3muU8U9oPtdub/MbPMLFn/SAU2sY8jnOMOz7hNAVjBDg5xgkvc4x3TwPmRrhYkbww8zWDVVXj40prkpR7hGn10sYfVb2KSgA+wjc4SMUnAyyiDaymX+s8+ruK3wS2s4TgFuFiQpBwmvdmo/EixnVqR7gcp1mKnhvtxAPoSCx7UcD8J3B/GgseBJK8VMWcV98s/10YseBIA31TEtHE6157H2YdvPRYacv+GXQ2qPee+BD7hAltNQrM0qU/w9c3ief9ntwAAAABJRU5ErkJggg=='
    },
    {
        image: 'Sewing needle',
        src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEtUlEQVR4nM2Za4hVVRTHf2ZTk9oDlcge2IeMIYcekD0sewiBPaaYkimSjAKlKDMKh5IeRGQPCqKQxPxUElakCRUhlDGWmYW9zEbKpqxoysqprGy8MzeW/DcsDvdez7nes+/5wflw9j5nn73O2Wut/14H4nAQ0Av8C/QDW4GNwHLgTmA6MKbG/aOB24Ae4HfgF2AN0EFkzJAvgXKNw4xcDcwGRrl7LwR+qnHfQzSBg4EjgROAs4E5wNPABmDITW4HcB/QDexR2ybgeuAI4BDgFmC3+i6lQBwFzAU+rPDWHwBGVrhnnvptmRWSGxOGrATOAh4G7gJadd0Y9f9KARkJrNcE3wMGKnyh+br2UJ3bNYVjoSb3IzAOOK+CIffq2k6dm+GF4lTgP2AYmKG2GypEtxP15YI/3U6BsIj2mSa22LVPlWHW/hcwU+2PuC9neaYwPKaJbU3kEWOK8ouFbmOBjBsEplEgpimPlJRfqmGGvCqDhxSuC8PhwDea3KIa13VI3pSdIUdTEEYoR9jEPpGUSWK54llnwHpprkI5ebfLA5OqLLltuma3kqFFq+vU9gYF4Cr5hDnt5Ym+VuBxp79MZ7W7/na1f0eTuUj5wiZzd6KvDdisPhOMDwItFfzK+v+hiZypfGATebKCQw+oz5bUuVXGCBrLxmkKp2hjZJNYKmcP3O8S3wv7SHJtuu5rmsAkt0F60clyM+YptQ9qJ7gv5rhxonIs0OciTQizBwLPOQ3VkXK8dbrH5H40xgNb9OB1Tn60uiz9J3BByvHO1z2/xdRYhwEfuRBq0SY461tuU2RaKg22xf28SrTLDXvoO3porxN8Y4EPnHKdnGHM5brvC6nl3LG4/5oe+j1wvNuXf6r2PhUh0rJA9/0BnEQEDlD4LKv+ZKESGfOV2s1njskwZpdUwFDMiskzTj+dprbJWkZlLSvbwqblGidlbiUSizTZv11WPkMObe1vq2CQlpmurnUHkZWsaaiL1TbdyZHVroyThiuVIMsaOwpz9elLWs/GFUpyNpHnlfzS0umMsKpKFIIjDks6oP3CHldIsACQlinuBYSyT+7McHK825Uxh+ssME8AfqiijHPjHDl1WaVM9AbLMsTifr0VxjUZl+J+yfGdeugSLZ0ndF5ySywLoSDdp+wfRY6HasYKZfFlLmIFZ8+CRbOfNcZlNEGOm/h72eWOUObMymyNsZEmyHE7f1PnO+Uz9bJC49xEBDkeCsYfAxOBd3XeL5/ZH0LJp40csfW71snxdhlj599WqUdlZZfGG01OWAhcpYdsl37qdQrWfIYGGjKKnFjqfk52ypiydn3mI40iBJCJ5MA9GnyX5PMOna+VzzSSsAnravC4e38DBxG4xH36VRkVbFrma/yXGl3OHHQFg5IrqOUlG8brZZWAkxsxYJsrWQYDhrXMYm3KNrtqS12MdXvqcAxqmcXAqiKb3HbYlHBmWlydKRwDWmYxmeDCe7/EZ7ISX5PFCSO2xSq5VPGX1xNzuVmlpJp0JYzoaXCOqIcRwCz9yPH/DN8HHgWuBU4HjvNJ1F+8rMp/vGbRAlwNvOI2cZUOE7F7d2NmjNWPioyVYC/RLtQMM71nSsMM7PkfAn6kYST/UyoAAAAASUVORK5CYII='
    }
]

const hiddenIcons = document.querySelector('#hiddenIcons')
const hiddenIconsHTML = hiddenImages.map(image =>`<img alt="${image.image.toLowerCase()} icon" width="50" height="50" class="icon" loading="lazy" src="${image.src}">`)
                                    .join('');

hiddenIcons.innerHTML += hiddenIconsHTML;



// Accessibility Modal
const accessibilityModal = document.getElementById('accessibilityModal');
accessibilityModal.innerHTML += 
`
    <dialog>
        <div>
            <h6>Text Adjustments</h6>
            <button id="textFontSize" class="button inverted">Increase Font Size</button>
            <button id="textLineHeight" class="button inverted">Increase Line Height</button>
        </div>
        <div>
            <h6>Color Adjustments</h6>
            <button id="colorInvert" class="button inverted">Invert</button>
            <button id="colorGrayscale" class="button inverted">Grayscale</button>
        </div>
    </dialog>
`


accessibilityModal.addEventListener('click', function(){
    this.classList.toggle('open');
})

const fontSize = document.getElementById('textFontSize')
const lineHeight = document.getElementById('textLineHeight')
const colorInvert = document.getElementById('colorInvert')
const colorGreyscale = document.getElementById('colorGrayscale')

fontSize.addEventListener('click', function(){
    if(this.classList.contains('active') && localStorage.getItem('increaseFontSize')) {
        this.classList.remove('active');
        document.body.classList.remove('accessibility__increase__font-size');
        localStorage.setItem("increaseFontSize", 'false');
    }
    else {
        this.classList.add('active');
        document.body.classList.add('accessibility__increase__font-size');
        localStorage.setItem("increaseFontSize", 'true');
    }
});

lineHeight.addEventListener('click', function(){
    if(this.classList.contains('active') && localStorage.getItem('increaseLineHeight')) {
        this.classList.remove('active');
        document.body.classList.remove('accessibility__increase__line-height');
        localStorage.setItem("increaseLineHeight", 'false');
    }
    else {
        this.classList.add('active');
        document.body.classList.add('accessibility__increase__line-height');
        localStorage.setItem("increaseLineHeight", 'true');
    }
});

colorInvert.addEventListener('click', function(){
    if(this.classList.contains('active') && localStorage.getItem('colorInvert')) {
        this.classList.remove('active');
        document.body.classList.remove('accessibility__color__invert');
        localStorage.setItem("colorInvert", 'false');
    }
    else {
        this.classList.add('active');
        document.body.classList.add('accessibility__color__invert');
        localStorage.setItem("colorInvert", 'true');
    }
});

colorGreyscale.addEventListener('click', function(){
    if(this.classList.contains('active') && localStorage.getItem('colorGreyscale')) {
        this.classList.remove('active');
        document.body.classList.remove('accessibility__color__greyscale');
        localStorage.setItem("colorGreyscale", 'false');
    }
    else {
        this.classList.add('active');
        document.body.classList.add('accessibility__color__greyscale');
        localStorage.setItem("colorGreyscale", 'true');
    }
});


document.addEventListener("DOMContentLoaded", () => {
    if(localStorage.getItem('increaseFontSize') === 'true') {
        fontSize.classList.add('active');
        document.body.classList.add('accessibility__increase__font-size');
    }
    if(localStorage.getItem('increaseLineHeight')  === 'true') {
        lineHeight.classList.add('active');
        document.body.classList.toggle('accessibility__increase__line-height');
    }
    if(localStorage.getItem('colorInvert')  === 'true') {
        colorInvert.classList.add('active');
        document.body.classList.toggle('accessibility__color__invert');
    }
    if(localStorage.getItem('colorGreyscale')  === 'true') {
        colorGreyscale.classList.add('active');
        document.body.classList.toggle('accessibility__color__greyscale');
    }
});