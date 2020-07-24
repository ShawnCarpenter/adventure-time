// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { renderQuest } from '../quest/questUtils.js';
import questData from '../data.js';
const test = QUnit.test;




test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = '<section id="quest"><div>A Problem Dragon</div><div>You travel to a nearby village you have heard is being terrorized by a dragon. Sure enough as you rent a room in a local inn, you go outside and see the dragon about to lay seige! What do you do?</div><img src="dragon.jpg"><form><label><span>Get the hell out of the village</span><input type="radio" name="choices" value="run"></label><label><span>Fiiiiiggghhhttt!</span><input type="radio" name="choices" value="fight"></label><label><span>Emulate that guy from LOR who shot an arrow</span><input type="radio" name="choices" value="archer"></label><button type="submit">Choose Wisely</button></form></section>'.replace(/\s/g, '');
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderQuest(questData[2]);
    const actualEl = actual.outerHTML;
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actualEl.replace(/\s/g, ''), expected);
});
