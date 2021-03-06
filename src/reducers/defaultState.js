export default function () {
    return {
        rulesReducer: {
            rules: [
                "1st RULE: You do not talk about FIGHT CLUB.",
                "2nd RULE: You DO NOT talk about FIGHT CLUB.",
                "3rd RULE: If someone says \"stop\" or goes limp, taps out the fight is over.",
                "4th RULE: Only two guys to a fight.",
                "5th RULE: One fight at a time.",
                "6th RULE: No shirts, no shoes.",
                "7th RULE: Fights will go on as long as they have to.",
                "8th RULE: If this is your first night at FIGHT CLUB, you HAVE to fight."
            ],
            ruleText:''
        },
        tilesReducer: {
            tiles: [
                {
                    header: "Facebook",
                    body: "https://www.facebook.com/"
                },
                {
                    header: "VK",
                    body: "https://www.vk.com/"
                },
                {
                    header: "Twitter",
                    body: "https://twitter.com"
                }
            ]
        },
        githubWidgetReducer: {
            ghUser : {
                name: 'John Doe',
                summary: 'Unknown guy',
                location: 'nowhere',
                icon: 'https://maxcdn.icons8.com/Share/icon/color/Gaming//pokecoin1600.png'
            },
            ghRepos : [
                {
                    name: 'single-repo',
                    language: 'esperanto',
                    stars:'-1'
                }
            ]
        }
    }
};