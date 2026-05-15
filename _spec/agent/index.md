# Agent

This section defines product-specific rules for how an agent should work with this specification.

Focused specification work is defined in [Focused Spec Work Protocol](./work-protocol.md).

## Rule 1: Product Definitions Must Respect Lore

Product definitions must not contradict the lore.

They must not silently redefine it, override it, or hollow it out through implementation language that changes its meaning.

If a product definition appears to conflict with the lore, the conflict must be made explicit and resolved consciously.

Lore is therefore not decorative background text.

It defines real world conditions that product definitions must preserve.

## Rule 2: Lore Files Must Contain Lore

Files inside `lore/` must contain lore only.

They may define world conditions, background reality, character situation, device meaning, and setting tone.

They must not define gameplay loops, product flow, UI structure, implementation behavior, or other operational product logic.

If lore suggests or motivates product structure, that structure must still be defined in product files outside `lore/`.

## Rule 3: Behavior Contracts Declare Product Functions

When a product function can be stated through observable behavior, agents should prefer a behavior contract.

A behavior contract should keep the function declaration short and attach acceptance checks directly to it.

Those checks are part of the product function definition.

Agents should keep product-level test meaning inside the behavior contract that declares the function.

Technical automated tests may be derived inside an active build path, but they must remain subordinate to the product behavior contract.

## Rule 4: Product Agent Rules Stay Product-Specific

This section is reserved for product-specific agent rules only.

It must not restate general meta rules unless a project-specific refinement is necessary.
