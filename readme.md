

### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
= 1.getElementById
  Select a single HTML element by its unique id.
  2.getElementsByClassName
  Select all HTML elements with a given class name.
 3.querySelector
 Selects the first element that matches a CSS selector.
 4.querySelectorAll
 Selects all elements that match a CSS selector



2. How do you **create and insert a new element into the DOM**?
 =createElement() - create a new element.
 setAttribute() - set any needed attributes,such as ID's or classes.
 createTextNode() -create any needed content
 appenChild() - attach the new text node to the element
    example :
<script>
    1.Create element
    let newDiv =document.createElementById('div')
    2.Add content & class
    newDiv.innerText ="I am a new div!";
    newDiv.classname ="newBox";
    3.createTextNode 
    let container = document.getElementById("container");
    4.insert new element
    container.appenchild(newDiv);
</script> -->


3. What is **Event Bubbling** and how does it work?

=Event bubbling in javascript is a mechanism where an event triggered on child element propagates upword through its ancestors in the DOM.It allows parent element to respond to events triggered by their child.
#Event bubbling works
.Event triggering :The click event is triggered on the child element (button),initiating the event propagation.
.Event Capturing : After reaching the target element (child),however,no listeners are explicitly set to handle events in this phase in the given code.
.Event Bubbling: After reaching the target element(child),the event enters the bubbling phase propagating back up through the DOM tree to the parent(parent).
.Listener Behavior : Event listeners are attached to both parent and child element using addEventListener. By default ,these listeners respond during the bubbling phase unless the capture option is set to true.
.Execution Order : When the button is clicked ,the child listener executes first (console.log("child")),followed by the parent listener (console.log("parent")) as the event bubbles up.


4. What is **Event Delegation** in JavaScript? Why is it useful?
= Event Delegation in javascript is a tachnique where a single event listener is attached to a parent element instead of attaching event listeners to multiple child elements.
#why is it useful 
(a) performance improvement 
.Adding individual listeners to many elements (like hundreds of buttons in a table) can slow down your page.
(b)handles dynamically added elementas
.If you create new elements after the page loads(e.g.,adding a new list item vie javascript),regular listeners wo'nt work on them.
(c) Cleaner code
.Instead of attaching and removing multiple listeners ,you can manage events from on place,making code easier to maintain.
(d) Flexibility
.we can handle multiples types of cjild elements with one listener,using conditions like
if(e.target.matches('btn')).  




5. What is the difference between **preventDefault() and stopPropagation()** methods?
= preventDefault()
.It prevents the default action of an element from happening.
.It does not stop the event from bubbling (popagating) to parent element.
# stopPropagation()
.It stops the event from bubbling up(or capturing down)the DOM.
.It does not prevent the defualt browser action. 




---

  