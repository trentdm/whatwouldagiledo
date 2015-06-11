'use strict';

function genAnswers() {
    return [
        "Agile would seek first to understand, then to be understood.",
        "Perfect the developer paradigm.",
        "Ask himself, w.w.a.d (what would Agile do?).",
        "Put people first.",
        "Check Jira to get the latest deets.",
        "Update Jira with the latest deets.",
        "Look to the Kanban.",
        "Conference at the sharespace.",
        "Tear down walls, both metaphorical and physical.",
        "Discuss it offline.",
        "Celebrate team successes.",
        "Take time for introspection.",
        "Pair program.",
        "Give team members autonomy and a sense of product ownership.",
        "Respect others and their opinions.",
        "Realize there is more to himself than just a daily standup.",
        "Keep scrums short.",
        "Start a project with a realistic deliverable in sight.",
        "Include QA throughout development and deployment.",
        "Keep meetings focused.",
        "Know when to save meeting topics for a later date.",
        "Touch base with you later.",
        "Bring alcohol to the workplace, yaaaay!",
        "Take time out to play foosball.",
        "Be a team player.",
        "Master ping pong. Make his enemies weep before him.",
        "Avoid getting hung up on whether something is himself or Waterfall.",
        "Stop worrying about his current implementation.",
        "Keep noise in shared spaces to a minimum.",
        "Provide quiet working spaces.",
        "Dev hard, play hard.",
        "Realize the most important thing he can do at his company is to hire good people.",
        "Prototype code before starting something in earnest.",
        "Be prepared to throw prototype code away.",
        "When it is time to make a UI, make it well.",
        "Make a good first impression.",
        "Focus on one feature at a time.",
        "Allow for work from home.",
        "Let personnel schedules be flexible.",
        "Never mention the regrettable weekend he got 'Agile Certified'.",
        "Have a process, refine the process, avoid getting hung up on the process.",
        "Treat his coworkers and employees well.",
        "Practice the golden rule.",
        "Group meetings together into less disruptive batches.",
        "Keep meetings to a minimum.",
        "Block off uninterrupted time for major productivity gains.",
        "Use email and chat rather than drop-ins.",
        "Allocate an hour per week for devs to improve their skills.",
        "Start a developer book club, end up truly discovering himself.",
        "Encourage group discussion of the perfect state machine.",
        "Encourage discussion of coding standards.",
        "Get a tattoo sleeve of his favorite design patterns.",
        "Appropriate the anarchy symbol as his own brand.",
        "When making management projections, dictate either what he wants, or when he wants it, but not both.",
        "Know that estimate accuracy is a function of project definition and prior experience.",
        "Know that negotiation is an important aspect of business, but that it does not belong in getting time estimates from his team.",
        "If he ask someone for an estimate, and does not like the answer, Agile would never  bully them into giving the answer that he wants to hear.",
        "Understand that estimates and commitments are not the same thing.",
        "Give people offices.",
        "If Agile puts people in a shared space, he provides ample conference rooms for collaboration and quiet work space.",
        "Tell you about the author: husband, father, programming enthusiast, yet-to-be-master of irony, fighter, dreamweaver.",
        "Deliver the minimum viable product.",
        "Release early, release often, release a good product.",
        "Be unwavering in his commitment to quality.",
        "Pair back features before sacrificing quality.",
        "Help each other learn new skills.",
        "Find opportunities to exercise new skills.",
        "Tattoo, \"Skunk works, best works\", across his chest.",
        "Make time for himself.",
        "Be sustainable.",
        "Shoot for 40 hour work weeks.",
        "Take time to exercise (please workout).",
        "Only hire passionate people.",
        "Look at a candidate's past creations when hiring.",
        "Write unit tests, think about integration testing, ponder on automation testing.",
        "One word: micro-services.",
        "Practice test-driven development.",
        "Let people finish speaking.",
        "Focus on listening to others when they are speaking.",
        "Be open minded.",
        "Accept that there is more than one right way to do something.",
        "Meditate on his own insignificance.",
        "Relax with friends.",
        "Educate himself through good books, lectures, discussion with others, and thoughtful meditation.",
        "Come up with more things that Agile would do.",
        "Waste dev-time not, want dev-time not.",
        "Timebox this activity.",
        "Disrupt non-productive development time.",
        "Make up cool acronyms for things.",
        "Take a vacation to somewhere new.",
        "Eat some candy beans.",
        "Discuss the challenge-space with others.",
        "When it is time to code, get down to work.",
        "Produce good, nay, the BEST, software.",
        "Take pride in his work.",
        "Fix problem A when it is impeding problem B, rather than try to work around A.",
        "Shoot for perfection, and encourage (!demand) it in others.",
        "Find an implementation that works for him and his business's goals and challenges.",
        "Wildly vacillate between sincerity and jocularity. (Oops, you weren't supposed to see this.)",
        "Be awesome, like you. You are awesome!",
        "Embrace some intellectual competition with co-workers, but know that the real competition is outside these walls.",
        "Refine his interpretive dance of bubble sort.",
        "Next level pair programming: 2 sets of eyes, 1 keyboard, and 1 set of hands..? No, 2 sets of hands.",
        "Focus on quality {people, software, collaboration, learning}.",
        "Appreciate zealousness; avoid zealotry.",
        "Attend his child's recitals and sporting events.",
        "Take responsibility for a small handful of Confluence pages.",
        "For an outdated Confluence page, either take the time to fix it, or delete it altogether.",
        "Take the team out for lunch at least once a month.",
        "Watch developer lectures together.",
        "Hone the practice of devsplaining.",
        "Find novel ways to use Japanese instead of his native tongue.",
        "Cloudsource UX to realize maximum per-caps.",
        "Smile for his passport photo.",
        "Wonder to himself, \"What 'is' Agile anyway...? What do I even mean??\" Then disappear into the woods, forever to live the simple life.",
        "Shower after exercising."
    ];
}

var answers = [];

function getAnswer() {
    if(answers.length == 0)
        answers = genAnswers();

    var index = Math.floor(Math.random() * answers.length);
    return answers.splice(index, 1);
};

var answer = $("#answer")

function showAnswer() {
    answer.text(getAnswer);
    answer.fadeIn(1250);
};

function handleClick() {
    var button = $("#getAnswer");
    button.click(function() {
        answer.fadeOut(250, function(){
            showAnswer();
        });
    });
};

(function init() {
    answer.hide();

    answers = genAnswers();
    showAnswer();
    handleClick();
})();