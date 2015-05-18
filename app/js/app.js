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
        "Give the team members autonomy and a sense of product ownership.",
        "Try to not be bossy.",
        "Realize there's more to himself than just a daily standup.",
        "Keep scrums short.",
        "Start a project with some deliverable in sight, even a small one.",
        "Include QA throughout development and deployment.",
        "Keep meetings focused and know when to save topics for a later date.",
        "Touch base with you later.",
        "Bring alcohol to the workplace, yaaaay!",
        "Take time out to play foosball and be a team player.",
        "Master ping pong. Make his enemies weep before him.",
        "Keep noise in shared spaces to a minimum.",
        "Work hard, play hard.",
        "Realize the most important thing he can do at his company is to hire good people.",
        "Prototype code before starting something in earnest",
        "Be prepared to throw prototype code away.",
        "Take the team out to lunch once a month.",
        "Update the website.",
        "Focus on one feature at a time.",
        "Allow for some work from home.",
        "Let personnel schedules be reasonably flexible.",
        "Not use his 'Agile Certification' credentials to boss people into making poor decisions.",
        "Have a process, refine the process, don't necessarily get hung up on the process.",
        "Treat his coworkers and employees well.",
        "Always be practicing the golden rule.",
        "Group meetings together, so there's more contiguous time in the rest of the day to get work done.",
        "Allocate an hour a week for devs to improve their skills (book club, watch lectures together, etc.).",
        "When making management projections, dictate either what he wants, or when he wants it, but not both.",
        "Define a project well enough that a team estimate has a chance of being within the correct order of magnitude.",
        "Negotiation is an important aspect of business, but Agile knows it does not belong in getting time estimates from his team.",
        "If he ask someone for an estimate, and doesn't like the answer, Agile doesn't bully them into what he want to hear.",
        "Understand that estimates and commitments are not the same thing.",
        "Give people offices, or if a shared space, ample conference rooms for collaboration or just wanting to work in a quiet space.",
        "Tell you about the author: husband, father, programming enthusiast, yet-to-be-master of irony, fighter, dreamweaver",
        "Deliver the minimum viable product.",
        "Release early, release often.",
        "Be unwavering in commitment to quality. Agile don't skimp on quality!",
        "Help each other learn new skills and find opportunities to hone them.",
        "\"Skunk works best works.\"",
        "Make time for himself.",
        "Be sustainable. Shoot for 40 hour work weeks.",
        "Take time to exercise (please workout).",
        "Only hire passionate people.",
        "Look at a candidate's past creations before hiring.",
        "Keep a Confluence page somewhat up-to-date.",
        "Write unit tests.",
        "Practice test-driven development.",
        "Not be militaristic or overly zealous about the right or wrong way to do something.",
        "Educate himself through good books, lectures, discussion with others, and thoughtful meditation.",
        "Come up with more things that Agile would do.",
        "Waste not, want not."
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