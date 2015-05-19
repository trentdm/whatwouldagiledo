'use strict';

function genAnswers() {
    return [
        "Agile would seek first to understand, then to be understood.",
        "Perfect the paradigm.",
        "Ask himself, w.w.a.d (what would Agile do?).",
        "Put people first.",
        "Check Jira to get the latest deets.",
        "Update Jira with the latest deets.",
        "Look to the Kanban for direction.",
        "Conference at the sharespace.",
        "Tear down walls (metaphorical and physical).",
        "Update the Confluence page.",
        "Discuss it offline.",
        "Celebrate team successes.",
        "Take time for introspection.",
        "Pair program.",
        "Give team members autonomy and a sense of product ownership.",
        "Try to not be bossy.",
        "Realize there's more to himself than just a daily standup.",
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
        "Look down his nose at Waterfall.",
        "Not look down his nose at Waterfall.",
        "Be self-conscious of his current implementation.",
        "Keep noise in shared spaces to a minimum.",
        "Not make headphones mandatory in order to have some quiet.",
        "Work hard, play harder.",
        "Realize the most important thing he can do at his company is to hire good people.",
        "Prototype code before starting something in earnest.",
        "Be prepared to throw prototype code away.",
        "Take the team out to lunch once a month.",
        "When it's time to make a UI, make it well.",
        "Make a good first impression.",
        "Focus on one feature at a time.",
        "Allow for work from home.",
        "Let personnel schedules be flexible.",
        "Not use his 'Agile Certification' credentials to encourage poor decision making.",
        "Have a process, refine the process, not get hung up on the process.",
        "Treat his coworkers and employees well.",
        "Practice the golden rule.",
        "Group meetings together in batches.",
        "Keep meetings to a minimum.",
        "Block off uninterrupted time for work to get done.",
        "Use email and chat over drop-ins.",
        "Allocate an hour a week for devs to improve their skills.",
        "Start a developer book club.",
        "Watch developer watch lectures together.",
        "Encourage group discussion of higher level design concepts.",
        "Encourage discussion of coding standards.",
        "Get a tattoo sleeve of his favorite design patterns.",
        "When making management projections, dictate either what he wants, or when he wants it, but not both.",
        "Define a project well enough that a team estimate has a chance of being within the correct order of magnitude.",
        "Know that negotiation is an important aspect of business, but that it does not belong in getting time estimates from his team.",
        "If he ask someone for an estimate, and doesn't like the answer, Agile doesn't bully them into what he want to hear.",
        "Understand that estimates and commitments are not the same thing.",
        "Give people offices.",
        "If Agile puts people in a shared space,provide ample conference rooms for collaboration and quiet work space.",
        "Tell you about the author: husband, father, programming enthusiast, yet-to-be-master of irony, fighter, dreamweaver.",
        "Deliver the minimum viable product.",
        "Release early, release often.",
        "Be unwavering in commitment to quality.",
        "Not skimp on quality.",
        "Pair back features before sacrificing quality.",
        "Help each other learn new skills.",
        "Find opportunities to exercise new skills.",
        "Tattoo, \"Skunk works best works.\", across his chest.",
        "Make time for himself.",
        "Be sustainable.",
        "Shoot for 40 hour work weeks.",
        "Take time to exercise (please workout).",
        "Only hire passionate people.",
        "Look at a candidate's past creations before hiring.",
        "Keep a Confluence page somewhat up-to-date.",
        "Write unit tests.",
        "Practice test-driven development.",
        "Let people finish speaking.",
        "Focus on listening to others when they're speaking.",
        "Not turn into a rule/process/implementation zealot.",
        "Be open minded.",
        "Accept there's more than one right way to do something.",
        "Not put others, or their ideas, down.",
        "Meditate on his own insignificance.",
        "Relax with friends.",
        "Educate himself through good books, lectures, discussion with others, and thoughtful meditation.",
        "Come up with more things that Agile would do.",
        "Waste not, want not.",
        "Timebox this activity.",
        "Make up cool acronyms for things.",
        "Take a vacation to somewhere different.",
        "Eat some candy beans.",
        "Discuss a problem he's having with someone new.",
        "When it's time to code, get down to work.",
        "Produce good software.",
        "Take pride in his work.",
        "Fix something if it is impeding something else.",
        "Shoot for perfection, and encourage (not demand) it in others.",
        "Find an implementation that works for him and his business's goals and challenges.",
        "Be awesome, like you. You're awesome!"
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