import { ProfileData } from "@/types/homepage"

export const profileStatRange = [
    "Very High",
    "High",
    "Medium",
    "Low"
]

export const riskStatRange = [
    "High risk",
    "Medium risk",
    "Low risk"
]

export const dummyRiskStat = {
    "Low risk": 12,
    "Medium risk": 40,
    "High risk": 38,
}

export const profileStatColor: Record<string, string> = {
    "Very High": "red",
    "High": "orange",
    "Medium": "yellow",
    "Low": "#24d66e",
    "Neutral": "#A9A9A9"
}

export const riskStatColor: Record<string, string> = {
    "High risk": "red",
    "Medium risk": "yellow",
    "Low risk": "#24d66e"
}

export const dummyProfileData: ProfileData[] = [
    {
        title: "Impact Profile",
        datas: [
            "Very High",
            "Very High",
            "Neutral",
            "Neutral",
            "Low",
        ]
    },
    {
        title: "Dependency Profile",
        datas: [
            "Very High",
            "Very High",
            "Neutral",
            "Neutral",
            "Low",
        ]
    },
    {
        title: "Nature Risk Profile",
        datas: [
            "High",
            "Medium",
            "Medium",
            "Medium",
            "Neutral",
        ]
    },
    {
        title: "Climate Risk Profile",
        datas: [
            "Neutral",
            "High",
            "Neutral",
            "Neutral",
            "Neutral",
        ]
    },
]

export const dummyProfilePlaces = [
    {
        name: "Berlin",
        shortCode: "Be"
    },
    {
        name: "Hamburg",
        shortCode: "Hg"
    },
    {
        name: "Munich",
        shortCode: "Mh"
    },
    {
        name: "Bremen",
        shortCode: "Bm"
    },
    {
        name: "Bremen",
        shortCode: "Bm"
    },
]