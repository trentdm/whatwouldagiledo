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
        "Tear down walls (metaphorical and physical).",
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
        "Take the team out for lunch and socializing at least once a month.",
        "When it is time to make a UI, make it well.",
        "Make a good first impression.",
        "Focus on one feature at a time.",
        "Allow for work from home.",
        "Let personnel schedules be flexible.",
        "Never mention the regrettable weekend he got 'Agile Certified'.",
        "Have a process, refine the process, not get hung up on the process.",
        "Treat his coworkers and employees well.",
        "Practice the golden rule.",
        "Group meetings together into less disruptive batches.",
        "Keep meetings to a minimum.",
        "Block off uninterrupted time for major productivity gains.",
        "Use email and chat over drop-ins.",
        "Allocate an hour a week for devs to improve their skills.",
        "Start a developer book club, end up truly discovering himself.",
        "Watch developer watch lectures together.",
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
        "If Agile puts people in a shared space, provide ample conference rooms for collaboration and quiet work space.",
        "Tell you about the author: husband, father, programming enthusiast, yet-to-be-master of irony, fighter, dreamweaver.",
        "Deliver the minimum viable product.",
        "Release early, release often, release a good product.",
        "Be unwavering in his commitment to quality.",
        "Focus on quality [people, software, business, recreation].",
        "Pair back features before sacrificing quality.",
        "Help each other learn new skills.",
        "Find opportunities to exercise new skills.",
        "Tattoo, \"Skunk works, best works.\", across his chest.",
        "Make time for himself.",
        "Be sustainable.",
        "Shoot for 40 hour work weeks.",
        "Take time to exercise (please workout).",
        "Only hire passionate people.",
        "Look at a candidate's past creations when hiring.",
        "Keep his Confluence pages somewhat up-to-date, and get rid of the obsolete ones.",
        "Write unit tests, think about integration testing, ponder on automation testing.",
        "One word: micro-services.",
        "Practice test-driven development.",
        "Let people finish speaking.",
        "Focus on listening to others when they are speaking.",
        "Appreciate zealousness; not be a zealot.",
        "Be open minded.",
        "Accept that there is more than one right way to do something.",
        "Meditate on his own insignificance.",
        "Relax with friends.",
        "Next level pair programming: 2 sets of eyes, 1 keyboard, 1 set of hands? NO, 2 sets of hands.",
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
        "Produce good, no, the BEST, software.",
        "Take pride in his work.",
        "Fix something, rather than work around it, when it is impeding something else.",
        "Shoot for perfection, and encourage (not demand) it in others.",
        "Find an implementation that works for him and his business's goals and challenges.",
        "Wildly vacillate between sincerity and jocularity. (Oops, you weren't supposed to see this.)",
        "Be awesome, like you. You are awesome!",
        "Maybe be a bit intellectually competitive with co-workers, but know that the real competition is outside these walls.",
        "Refine his interpretive dance of bubble sort.",
        "Attend his child(s) recitals and sportball games."
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