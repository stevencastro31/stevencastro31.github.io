<script>
    import Section from "$lib/components/Section.svelte";
    import SkillBoard from "./SkillBoard.svelte";
    import TailWindCSSIcon from "$lib/svg/Tailwind CSS.svg";
    import DialogflowIcon from "$lib/svg/Dialogflow.svg";

    let web_dev = [{
        title: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    },  {
        title: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    }, {
        title: "TailwindCSS", icon: TailWindCSSIcon,
    }, { 
        title: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    }, {
        title: "Svelte", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/svelte/svelte-original.svg",
    }, {
        title: "NodeJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    }, {    
        title: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    }, {    
        title: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
    }];

    let languages = [{
        title: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg"
    }, {
        title: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg",
    }, {
        title: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
    }, { 
        title: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    }, { 
        title: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    }];

    let databases = [{
        title: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
    }, {
        title: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
    }, {
        title: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg",
    }]

    let source = [{
        title: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    }, {
        title: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
    }, {
        title: "Github", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
    }];

    let apis = [{
        title: "Dialogflow", icon: DialogflowIcon,
    }, {
        title: "DiscordJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/discordjs/discordjs-original.svg",
    }];

    let skills = [...languages, ...web_dev, ...databases, ...source, ...apis];
</script>

<Section id="skills">
    <div class="h-auto w-screen py-16 bg-bunker-950 flex flex-col items-center">
        <h1 class="text-center text-4xl text-white font-bold mb-8 p-4 border-b-2">Skills</h1>
        <SkillBoard {skills}/>          
    </div>
</Section>