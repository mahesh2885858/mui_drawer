import React from 'react'
import checkStrength from './checkStrength'
const PasswordChecking = () => {
    const [score, setScore] = React.useState(0)
    const [error, setError] = React.useState("")
    const check = (password: string) => {
        // console.log(password)

        setScore(checkStrength(password))
    }
    return (
        <div>
            <div>
                <input type="password" name="password" id="password" onChange={(e) => { check(e.target.value) }} />
            </div>
            <progress value={score} max={100} >10%</progress>
        </div>
    )
}

export default PasswordChecking