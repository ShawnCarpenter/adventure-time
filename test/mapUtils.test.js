// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { renderStats, renderQuestLink } from '../map/mapUtils.js';

import questData from '../data.js';
const test = QUnit.test;




test('renderStats should take a user object and return an HTML section with the user stats. ', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = '<section class="user-stats"><div id="name">Name: Shawn</div><div id="class">Class: wizard</div><div id="hp">HP: 20</div><div id="gold">Gold: 100</div><div id="completed">Shawn has completed 2 quests</div></section>';

    const user = { name: 'Shawn', class: 'wizard', hp: 20, gold: 100, completed: { monsters:true, dragons:true } };
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderStats(user);
    const actualEl = actual.outerHTML;
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actualEl, expected);
});

test('renderQuestLink should take a quest and a user and return an a element with the url for the quest ', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected1 = '<a href="/quest/?id=treasure">The Golden Treasure</a>';
    const expected2 = '<a style="text-decoration: line-through; cursor: not-allowed;">A Den of Monsters</a>';

    const user = { name: 'Shawn', class: 'wizard', hp: 20, gold: 100, completed: { monsters:true, dragons:true } };
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual1 = renderQuestLink(questData[1], user);
    const actualEl1 = actual1.outerHTML;

    const actual2 = renderQuestLink(questData[0], user);
    const actualEl2 = actual2.outerHTML;
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actualEl1, expected1);
    expect.equal(actualEl2, expected2);
});
