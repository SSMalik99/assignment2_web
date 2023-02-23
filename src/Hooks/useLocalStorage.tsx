import { useEffect, useState } from "react"

const useLocalStorage = () => {
    return localStorage.getItem("notes")
}

export default useLocalStorage