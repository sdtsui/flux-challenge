spike workflow:

  Syntax Familiarity:
  -render/recreate static web components with provided template in Trio.Component
    -sithList
    -sith
  -fetch Logic in SithList, using Trio.Resource and Signals between Sith/SithList
  -hook them together using Signals
    -trigger rendering for indivdidual sith without a full SithList rerender
