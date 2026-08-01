/* All questions below are original, written to resemble the FORMAT and
   difficulty of released MBE/MEE material. They are not reproductions
   of any actual NCBE-released question.

   Each MBE question has an `explanations` array — one entry per choice,
   in order — so the practice UI can show why the correct answer is
   right AND why each distractor is wrong. */

const MBE_QUESTIONS = [

  /* ---------------- CONTRACTS ---------------- */
  {
    id: "contracts-1", subject: "Contracts",
    prompt: "A buyer mailed a signed letter accepting a seller's offer to sell a used tractor. Before the seller received the letter, the buyer called and said, 'I revoke my acceptance — deal's off.' The seller received the call first, then the letter two days later. Is there an enforceable contract?",
    choices: [
      "No, because the buyer revoked before the seller received the written acceptance.",
      "Yes, because under the mailbox rule the acceptance was effective the moment it was mailed.",
      "No, because oral revocations are never effective against a mailed acceptance.",
      "Yes, but only if the seller can show reliance on the acceptance before the phone call."
    ],
    correct: 1,
    explanations: [
      "Incorrect — receipt isn't what matters under the mailbox rule; dispatch is.",
      "Correct — a properly mailed acceptance is effective on dispatch, so the contract formed the moment the letter was mailed, before the revoking call.",
      "Incorrect — the rule isn't about the form of the revocation, it's about timing: the acceptance was already effective.",
      "Incorrect — reliance isn't an element here; the mailbox rule makes the acceptance effective regardless of reliance."
    ]
  },
  {
    id: "contracts-2", subject: "Contracts",
    prompt: "A homeowner orally agreed to pay a contractor $8,000 to remodel a bathroom, to be completed within four months. The contractor began work the next day. Two weeks later, the homeowner refused to pay, arguing the agreement was unenforceable. Is the homeowner correct?",
    choices: [
      "Yes, because contracts for over $500 must be in writing under the UCC.",
      "Yes, because the statute of frauds requires all home improvement contracts to be written.",
      "No, because the statute of frauds does not bar this contract, which can be performed within one year.",
      "No, because part performance always removes a contract from the statute of frauds."
    ],
    correct: 2,
    explanations: [
      "Incorrect — the UCC's $500 threshold applies to sales of goods, not services like remodeling.",
      "Incorrect — there's no blanket writing requirement for all home improvement contracts under the statute of frauds.",
      "Correct — the one-year provision only bars contracts that cannot possibly be performed within a year; a four-month job doesn't trigger it.",
      "Incorrect — part performance can help remove some contracts from the statute, but it's not 'always' the reason, and it isn't needed here since the one-year provision never applied."
    ]
  },
  {
    id: "contracts-3", subject: "Contracts",
    prompt: "A buyer sent a purchase order for 500 widgets at $2 each. The seller responded with an acknowledgment agreeing to the order but adding a term requiring disputes to be arbitrated. Both parties are merchants. Neither party ever objected to the other's document. Is the arbitration term part of the contract?",
    choices: [
      "No, because any additional term in an acceptance automatically voids the offer.",
      "Yes, because between merchants, additional terms become part of the contract unless they materially alter it or are objected to.",
      "No, because arbitration clauses can never be added via a battle-of-the-forms acknowledgment.",
      "Yes, but only if the buyer specifically initialed the arbitration clause."
    ],
    correct: 1,
    explanations: [
      "Incorrect — under UCC 2-207, an acceptance with additional terms is still generally effective; it doesn't void the offer.",
      "Correct — between merchants, additional terms in an acceptance become part of the contract unless they materially alter it, the offer limited acceptance to its own terms, or the offeror objects.",
      "Incorrect — arbitration clauses aren't categorically barred; whether one becomes part of the contract depends on materiality and objection, like other additional terms.",
      "Incorrect — there's no initialing requirement under UCC 2-207 for the term to become part of the contract."
    ]
  },
  {
    id: "contracts-4", subject: "Contracts",
    prompt: "A debtor owed a creditor $10,000, due in full immediately. The creditor agreed to accept $8,000 now in full satisfaction of the debt, and the debtor paid it. Later, the creditor sued for the remaining $2,000. Under the common law pre-existing duty rule, is the creditor likely to win?",
    choices: [
      "No, because the parties had a valid accord and satisfaction.",
      "Yes, because paying less than what is already owed is not new consideration, so the promise to forgive $2,000 is unenforceable.",
      "No, because partial payment of a debt always fully discharges it.",
      "Yes, because oral modifications of debt agreements are never enforceable."
    ],
    correct: 1,
    explanations: [
      "Incorrect — under the traditional pre-existing duty rule, paying part of an amount already owed isn't new consideration, so there's no valid accord and satisfaction here.",
      "Correct — at common law, doing less than what you already owe isn't consideration for a promise to forgive the rest, so the creditor can still sue for the balance.",
      "Incorrect — partial payment doesn't automatically discharge a debt; that's exactly the pre-existing duty problem.",
      "Incorrect — the issue isn't that the modification was oral, it's that it lacked consideration."
    ]
  },
  {
    id: "contracts-5", subject: "Contracts",
    prompt: "A homeowner contracted with a landscaper to install a pool, explicitly naming the homeowner's neighbor as the intended recipient of a small koi pond feature as a gift. The landscaper never installed the koi pond. Can the neighbor sue the landscaper for breach?",
    choices: [
      "No, because the neighbor was not a party to the contract and has no rights under it.",
      "Yes, if the neighbor is an intended third-party beneficiary whose rights have vested.",
      "No, because only creditor beneficiaries, never donee beneficiaries, can sue on a contract.",
      "Yes, but only if the neighbor paid consideration to the landscaper."
    ],
    correct: 1,
    explanations: [
      "Incorrect — non-parties can still have enforceable rights if they qualify as intended (rather than incidental) beneficiaries.",
      "Correct — an intended beneficiary, including a donee beneficiary named to receive a gift under the contract, can sue to enforce the contract once their rights have vested.",
      "Incorrect — it's the reverse: both creditor and donee beneficiaries can generally enforce a contract if they're intended beneficiaries.",
      "Incorrect — an intended beneficiary doesn't need to have given consideration to sue; that's what distinguishes them from a party to the contract."
    ]
  },
  {
    id: "contracts-6", subject: "Contracts",
    prompt: "A supplier agreed to deliver custom parts to a manufacturer monthly for a year. Two months before the first delivery, the supplier sent a letter stating clearly and unequivocally that it would not perform any part of the contract. Can the manufacturer sue immediately, without waiting for the delivery date?",
    choices: [
      "No, a party can never sue for breach before performance is actually due.",
      "Yes, under the doctrine of anticipatory repudiation, since the supplier's clear statement allows the manufacturer to treat the contract as breached immediately.",
      "No, the manufacturer must wait until all twelve months have passed to sue for the full breach.",
      "Yes, but only if the manufacturer first pays for the first month's parts in advance."
    ],
    correct: 1,
    explanations: [
      "Incorrect — anticipatory repudiation is exactly the exception to that general rule.",
      "Correct — a clear, unequivocal statement of intent not to perform is an anticipatory repudiation, letting the non-breaching party sue immediately without waiting for the performance date.",
      "Incorrect — waiting the full year isn't required once there's been an unequivocal repudiation.",
      "Incorrect — advance payment isn't a precondition to suing on an anticipatory repudiation."
    ]
  },
  {
    id: "contracts-7", subject: "Contracts",
    prompt: "Two businesses signed a fully integrated written agreement for the sale of equipment, stating a price of $50,000. At trial, the buyer seeks to introduce evidence of an earlier oral conversation in which the seller allegedly agreed to a price of $45,000. Is this evidence admissible to contradict the written price term?",
    choices: [
      "Yes, prior oral statements are always admissible to explain a written contract.",
      "No, the parol evidence rule generally bars evidence of prior oral agreements offered to contradict a fully integrated written contract's terms.",
      "Yes, because oral agreements always take precedence over later written ones.",
      "No, because no extrinsic evidence is ever admissible once there is a signed writing."
    ],
    correct: 1,
    explanations: [
      "Incorrect — that's the opposite of the parol evidence rule's general effect on a fully integrated writing.",
      "Correct — where a writing is intended as the final, complete expression of the parties' agreement (fully integrated), prior or contemporaneous oral agreements that contradict its terms are generally inadmissible.",
      "Incorrect — a fully integrated later writing generally supersedes prior oral negotiations, not the reverse.",
      "Incorrect — extrinsic evidence can still come in for other purposes, like explaining ambiguity or showing fraud; the rule isn't an absolute bar on all extrinsic evidence."
    ]
  },
  {
    id: "contracts-8", subject: "Contracts",
    prompt: "A concert venue contracted with a band to perform. Two days before the show, the venue burned down in an accidental fire with no fault by either party, and no reasonable substitute venue was available in time. The band sues for breach when the venue cannot host the show. Is the venue likely liable?",
    choices: [
      "Yes, because impossibility never excuses a party's performance obligations.",
      "No, because the destruction of the specific venue, without fault, makes performance objectively impossible and discharges the duty.",
      "Yes, because the venue should have obtained fire insurance to guarantee performance.",
      "No, but only if the band agrees to reschedule at the same price."
    ],
    correct: 1,
    explanations: [
      "Incorrect — impossibility is a recognized defense in the right circumstances; this isn't a case where it never applies.",
      "Correct — when the specific thing necessary for performance (the venue itself) is destroyed without either party's fault, objective impossibility discharges the duty to perform.",
      "Incorrect — having insurance doesn't change whether performance is legally excused; it's a separate risk-management issue.",
      "Incorrect — discharge by impossibility doesn't hinge on the band's agreement to reschedule."
    ]
  },
  {
    id: "contracts-9", subject: "Contracts",
    prompt: "A construction contract stated: 'Owner shall pay contractor $100,000 within 10 days of architect's certificate of completion.' The architect never issued a certificate, though the work was substantially finished. The contractor sues for payment without a certificate. What is the owner's best argument?",
    choices: [
      "That the architect's certificate is an express condition precedent to payment that has not occurred.",
      "That the contract is void for lack of consideration.",
      "That the statute of frauds bars enforcement of the contract.",
      "That the contractor lacks standing to sue on a construction contract."
    ],
    correct: 0,
    explanations: [
      "Correct — the certificate was expressly made a condition precedent to the payment obligation, so, absent excuse (like bad-faith withholding), payment isn't due until it's issued.",
      "Incorrect — consideration isn't the issue here; both sides clearly exchanged promises of value.",
      "Incorrect — nothing in the facts suggests a writing problem; the dispute is about a condition, not formation.",
      "Incorrect — the contractor, as a party to the contract, plainly has standing to sue on it."
    ]
  },
  {
    id: "contracts-10", subject: "Contracts",
    prompt: "A freelance designer had a contract with a client entitling the designer to a $5,000 fee upon delivery of a logo. Before delivery, the designer assigned the right to receive that $5,000 payment to a bank as collateral for a loan, notifying the client of the assignment. After delivery, the client paid the designer directly instead of the bank. Can the bank recover from the client?",
    choices: [
      "No, because payment rights under a personal services contract can never be assigned.",
      "Yes, because the client had notice of the valid assignment and paying the assignor did not discharge the client's obligation to the assignee.",
      "No, because the designer, not the bank, performed the underlying services.",
      "Yes, but only if the client had signed a written consent to the assignment."
    ],
    correct: 1,
    explanations: [
      "Incorrect — it's the right to receive payment being assigned, not the duty to perform services; payment rights are generally freely assignable.",
      "Correct — once the client had notice of a valid assignment, paying the assignor instead of the assignee doesn't discharge the debt; the bank can still collect from the client.",
      "Incorrect — the assignment concerns the payment right, not who performed the services, so this doesn't defeat the bank's claim.",
      "Incorrect — the client's consent isn't generally required for an assignment of a payment right to be effective; notice is what matters here."
    ]
  },

  /* ---------------- TORTS ---------------- */
  {
    id: "torts-1", subject: "Torts",
    prompt: "A grocery store employee mopped a floor and put up a wet-floor sign, then left the area for ten minutes without checking on it. A customer slipped and was injured after the sign had been knocked over by another shopper. The store had no policy for checking on such areas. In a negligence suit, is the store likely liable?",
    choices: [
      "No, because the store satisfied its duty by placing a warning sign.",
      "Yes, because a jury could find the store failed to use reasonable care in monitoring a known hazard.",
      "No, because the customer assumed the risk by walking in the area.",
      "Yes, because store owners are strictly liable for injuries occurring on their premises."
    ],
    correct: 1,
    explanations: [
      "Incorrect — an initial warning doesn't necessarily satisfy the ongoing duty of reasonable care toward a known hazard.",
      "Correct — a business owes invitees reasonable care, which can include periodically checking on known hazards; a jury could find ten unmonitored minutes and no inspection policy breached that duty.",
      "Incorrect — nothing shows the customer knowingly and voluntarily encountered a known risk; the sign had already fallen.",
      "Incorrect — premises liability for invitees is based on negligence (reasonable care), not strict liability."
    ]
  },
  {
    id: "torts-2", subject: "Torts",
    prompt: "A company transports fireworks through a residential neighborhood as part of its regular business. Despite using all reasonable precautions, a truck's cargo detonates due to a manufacturing defect in the fireworks, injuring a bystander. Under which theory is the company most likely to be held liable?",
    choices: [
      "Negligence, because reasonable precautions were not enough.",
      "Strict liability, because transporting explosives through a residential area is an abnormally dangerous activity.",
      "No liability, because the company exercised reasonable care.",
      "Vicarious liability, because the manufacturer, not the transporter, is at fault."
    ],
    correct: 1,
    explanations: [
      "Incorrect — negligence requires a breach of a duty of care, but the facts say reasonable precautions were taken.",
      "Correct — transporting explosives is typically treated as abnormally dangerous, imposing strict liability regardless of the precautions taken.",
      "Incorrect — reasonable care is a defense to negligence, but not to strict liability for an abnormally dangerous activity.",
      "Incorrect — the transporter's own strict liability doesn't depend on the manufacturer's separate fault."
    ]
  },
  {
    id: "torts-3", subject: "Torts",
    prompt: "A patient undergoes routine surgery and wakes up with an injury to a body part far from the surgical site, of a kind that does not normally occur absent negligence. The patient cannot identify which specific staff member caused the injury, but all those involved were under the surgical team's exclusive control. What doctrine best helps the patient's negligence claim?",
    choices: [
      "Respondeat superior, which automatically proves negligence occurred.",
      "Res ipsa loquitur, allowing an inference of negligence from the type of injury and exclusive control, without identifying the specific actor.",
      "Strict liability for medical procedures.",
      "The doctrine cannot help; the claim must be dismissed without naming a specific defendant."
    ],
    correct: 1,
    explanations: [
      "Incorrect — respondeat superior is about employer liability for an employee's proven negligence; it doesn't itself establish that negligence occurred.",
      "Correct — res ipsa loquitur lets a jury infer negligence from an injury that doesn't normally happen without negligence, combined with the defendants' exclusive control, even without pinpointing exactly who erred.",
      "Incorrect — ordinary medical malpractice is governed by negligence principles, not strict liability.",
      "Incorrect — res ipsa loquitur exists precisely to let such claims proceed despite that difficulty."
    ]
  },
  {
    id: "torts-4", subject: "Torts",
    prompt: "A debt collector repeatedly called a debtor late at night, using threatening and abusive language, for weeks, causing the debtor severe emotional distress requiring therapy. Which tort claim is the debtor's strongest?",
    choices: [
      "Negligent infliction of emotional distress, because the calls were unreasonable.",
      "Intentional infliction of emotional distress, based on extreme and outrageous conduct intended to cause severe emotional distress.",
      "Defamation, because the calls damaged the debtor's reputation.",
      "False imprisonment, because the debtor felt trapped by the calls."
    ],
    correct: 1,
    explanations: [
      "Incorrect — the facts show intentional, targeted conduct, which fits an intentional tort theory better than a negligence one.",
      "Correct — extreme and outrageous conduct, done intentionally or recklessly, that causes severe emotional distress is the core of an IIED claim, and repeated threatening late-night calls can meet that bar.",
      "Incorrect — defamation requires a false statement of fact harming reputation, which isn't described here.",
      "Incorrect — false imprisonment requires actual confinement, not just emotional pressure from phone calls."
    ]
  },
  {
    id: "torts-5", subject: "Torts",
    prompt: "A delivery driver, while making deliveries for her employer during work hours, negligently ran a red light and injured a pedestrian. The employer had a strict policy against running red lights. Is the employer likely liable to the pedestrian?",
    choices: [
      "No, because the driver violated an express company policy.",
      "Yes, under respondeat superior, because the driver was acting within the scope of employment when the negligence occurred.",
      "No, because only the driver, as the negligent actor, can be held liable.",
      "Yes, but only if the employer was itself independently negligent in hiring the driver."
    ],
    correct: 1,
    explanations: [
      "Incorrect — violating an internal policy doesn't take an act outside the scope of employment for respondeat superior purposes.",
      "Correct — under respondeat superior, an employer is vicariously liable for an employee's negligence committed within the scope of employment, which ordinary driving errors during deliveries typically are.",
      "Incorrect — vicarious liability specifically allows recovery from the employer too, not just the employee.",
      "Incorrect — respondeat superior doesn't require independent negligence by the employer; it's a form of vicarious, not direct, liability."
    ]
  },
  {
    id: "torts-6", subject: "Torts",
    prompt: "A local newspaper published a story, based on a reliable but ultimately mistaken source, falsely stating that a city council candidate had embezzled funds years earlier. The candidate sues for defamation. As a public figure, what must the candidate prove about the newspaper's state of mind?",
    choices: [
      "Nothing; public figures need not prove any fault to recover for defamation.",
      "Actual malice — that the newspaper knew the statement was false or acted with reckless disregard for its truth.",
      "That the newspaper was merely negligent in checking its source.",
      "That the newspaper published the story with an intent to increase sales."
    ],
    correct: 1,
    explanations: [
      "Incorrect — public figures face a heightened fault standard, not none at all.",
      "Correct — under the actual malice standard for public figures, the plaintiff must show the publisher knew the statement was false or recklessly disregarded its truth or falsity.",
      "Incorrect — mere negligence is the standard for private figures on matters of public concern, not the higher bar public figures must meet.",
      "Incorrect — a profit motive isn't the legal test; actual malice turns on knowledge or reckless disregard of falsity."
    ]
  },
  {
    id: "torts-7", subject: "Torts",
    prompt: "A manufacturer designed a power tool without a safety guard that competitors commonly included, and a safer alternative design was feasible at similar cost. A user was injured using the tool as intended. What is the user's strongest products liability theory?",
    choices: [
      "Manufacturing defect, because this particular unit came off the line incorrectly.",
      "Design defect, because a feasible, safer alternative design existed and the product as designed was unreasonably dangerous.",
      "Breach of express warranty, because the manufacturer made no specific safety promises.",
      "Negligent marketing, because the tool was advertised as easy to use."
    ],
    correct: 1,
    explanations: [
      "Incorrect — nothing suggests this specific unit deviated from the intended design; the problem is with the design itself.",
      "Correct — where a feasible, safer alternative design was available and the chosen design was unreasonably dangerous, that supports a design defect claim.",
      "Incorrect — express warranty requires an actual promise or representation, which isn't described here.",
      "Incorrect — the facts describe a design choice, not a marketing misrepresentation."
    ]
  },
  {
    id: "torts-8", subject: "Torts",
    prompt: "A store detective, based on a reasonable but mistaken belief that a customer was shoplifting, detained the customer in a back room for 20 minutes before releasing her without ever calling police, and it turned out she was innocent. What is the customer's best claim, and how might the store defend it?",
    choices: [
      "Battery, with self-defense as the store's best defense.",
      "False imprisonment, with the shopkeeper's privilege (reasonable detention on reasonable suspicion, for a reasonable time and manner) as the store's best defense.",
      "Defamation, with truth as the store's best defense.",
      "Negligence, with contributory negligence as the store's best defense."
    ],
    correct: 1,
    explanations: [
      "Incorrect — there's no described physical contact, and self-defense doesn't fit a shoplifting-detention scenario.",
      "Correct — an unconsented confinement supports false imprisonment, but most jurisdictions recognize a shopkeeper's privilege to reasonably detain a suspected shoplifter on reasonable grounds, for a reasonable time and manner.",
      "Incorrect — no false statement to a third party is described, which defamation requires.",
      "Incorrect — this is an intentional confinement claim, not a negligence claim, so contributory negligence isn't the natural fit."
    ]
  },
  {
    id: "torts-9", subject: "Torts",
    prompt: "A landowner operates a factory that emits loud noise and foul odors at all hours, substantially interfering with a neighboring homeowner's ability to use and enjoy her property, even though the factory complies with all zoning laws. Can the homeowner recover in tort?",
    choices: [
      "No, because compliance with zoning laws is a complete defense to any tort claim.",
      "Yes, under a private nuisance theory, if the interference with use and enjoyment of land is substantial and unreasonable.",
      "No, because only physical trespass onto land, not noise or odor, can ever be actionable.",
      "Yes, but only if the factory intended to specifically harm this homeowner."
    ],
    correct: 1,
    explanations: [
      "Incorrect — zoning compliance is relevant to reasonableness but isn't an automatic, complete defense to a nuisance claim.",
      "Correct — a private nuisance claim protects against substantial, unreasonable interference with the use and enjoyment of land, which ongoing loud noise and odors can constitute even without physical trespass.",
      "Incorrect — nuisance law specifically covers intangible interferences like noise, odor, and vibration, not just physical trespass.",
      "Incorrect — nuisance liability doesn't require specific intent to harm this particular plaintiff; it can rest on unreasonable conduct or its effects."
    ]
  },
  {
    id: "torts-10", subject: "Torts",
    prompt: "A skier voluntarily joined an advanced-only trail marked with clear warning signs about the risk of falling on icy patches. She fell on visible ice and was injured. In a jurisdiction with both assumption of risk and comparative negligence, how will her claim against the resort likely be treated?",
    choices: [
      "Her recovery is completely barred because she signed nothing.",
      "Her known, voluntary encounter with an obvious risk on a marked advanced trail will likely reduce or bar recovery under assumption of risk or comparative fault principles.",
      "The resort is strictly liable for any injury occurring on its property regardless of warnings.",
      "She automatically recovers in full because warning signs don't satisfy any duty."
    ],
    correct: 1,
    explanations: [
      "Incorrect — a signed waiver isn't required for assumption of risk to apply; her conduct and knowledge of the obvious risk matter.",
      "Correct — knowingly and voluntarily choosing an advanced, clearly marked trail with an obvious hazard implicates both assumption of risk and comparative fault, which can reduce or bar her recovery depending on the jurisdiction's approach.",
      "Incorrect — ski resorts aren't generally held to strict liability for inherent risks of the sport.",
      "Incorrect — clear warning signs about a known, obvious hazard are exactly the kind of fact that can support the resort's defense, not eliminate it."
    ]
  },

  /* ---------------- CRIMINAL LAW & PROCEDURE ---------------- */
  {
    id: "crim-1", subject: "Criminal Law & Procedure",
    prompt: "Defendant handed a gun to an acquaintance and said, 'Hold onto this for me,' not knowing the acquaintance intended to use it in a robbery later that night. The acquaintance committed the robbery. Can defendant be convicted as an accomplice to the robbery?",
    choices: [
      "Yes, because defendant supplied the instrumentality used in the crime.",
      "No, because defendant did not share the intent to facilitate the robbery.",
      "Yes, under a theory of strict liability for weapons transfers.",
      "No, but defendant can still be convicted of the underlying robbery as a principal."
    ],
    correct: 1,
    explanations: [
      "Incorrect — merely supplying an item isn't enough without the intent to facilitate the specific crime.",
      "Correct — accomplice liability requires acting with the purpose of facilitating the crime; unknowingly supplying an item later misused doesn't meet that intent requirement.",
      "Incorrect — accomplice liability for a specific-intent crime like this isn't imposed on a strict liability basis.",
      "Incorrect — without participating in the robbery itself, defendant isn't a principal to it either."
    ]
  },
  {
    id: "crim-2", subject: "Criminal Law & Procedure",
    prompt: "Police received an anonymous tip that a specific car would be carrying drugs on a specific highway at a specific time. Officers located the car, matching every detail of the tip, and stopped it solely based on the tip. Was the stop constitutional?",
    choices: [
      "No, an anonymous tip alone can never justify a stop.",
      "Yes, because the tip was sufficiently corroborated by predictive detail to establish reasonable suspicion.",
      "No, because only tips from known informants can justify a stop.",
      "Yes, because any tip about drug activity automatically creates probable cause."
    ],
    correct: 1,
    explanations: [
      "Incorrect — an uncorroborated anonymous tip is often insufficient, but corroboration can change that, which is what happened here.",
      "Correct — independently verifying predictive, non-obvious details from an anonymous tip can make it reliable enough to establish reasonable suspicion for a stop.",
      "Incorrect — tips don't need a known source if sufficiently corroborated by police observation.",
      "Incorrect — reasonable suspicion, not probable cause, is the standard for a stop, and it isn't automatic just because drugs are mentioned."
    ]
  },
  {
    id: "crim-3", subject: "Criminal Law & Procedure",
    prompt: "Police arrested a suspect at his home and, without a warrant, immediately searched the entire house, including a locked box in a bedroom on the far side of the house, finding evidence there. Is the search of the locked box justified as a search incident to arrest?",
    choices: [
      "Yes, because any search occurring at the same time as an arrest is automatically valid.",
      "No, a search incident to arrest is generally limited to the arrestee's person and the area within his immediate reach, not a locked box in a distant room.",
      "Yes, because officer safety justifies searching the entire residence in every arrest.",
      "No, because searches incident to arrest are never permitted without a warrant."
    ],
    correct: 1,
    explanations: [
      "Incorrect — timing alone doesn't validate a search; scope matters, and this exceeds the permissible area.",
      "Correct — the search-incident-to-arrest exception is generally confined to the arrestee's person and the area within his immediate control (wingspan), not a locked container far away.",
      "Incorrect — officer safety justifies a limited protective sweep in some cases, but not an unlimited search of the whole house.",
      "Incorrect — search incident to arrest is itself a recognized warrantless-search exception; the problem here is its scope, not its existence."
    ]
  },
  {
    id: "crim-4", subject: "Criminal Law & Procedure",
    prompt: "Defendant and an accomplice agreed to commit a burglary. During the burglary, the accomplice unexpectedly shot and killed a homeowner who confronted them. Defendant never intended for anyone to be killed. In a jurisdiction following the felony murder rule, is defendant likely guilty of murder?",
    choices: [
      "No, because defendant did not personally cause the death.",
      "Yes, under the felony murder rule, a death caused during the commission of an inherently dangerous felony like burglary can be imputed to all participants.",
      "No, because felony murder requires proof of premeditation.",
      "Yes, but only if defendant fired the fatal shot personally."
    ],
    correct: 1,
    explanations: [
      "Incorrect — felony murder specifically imputes liability to co-felons even without personally causing the death.",
      "Correct — a killing that occurs during the commission of an inherently dangerous felony, like burglary, can support a felony murder conviction for all participants, without a separate showing of intent to kill.",
      "Incorrect — felony murder is precisely the doctrine that removes the need for separate proof of premeditation or intent to kill.",
      "Incorrect — felony murder liability doesn't require personally pulling the trigger; it can attach to co-felons based on participation in the underlying felony."
    ]
  },
  {
    id: "crim-5", subject: "Criminal Law & Procedure",
    prompt: "A defendant, due to a severe mental disease, genuinely believed while committing a killing that he was squeezing a lemon, not realizing he was harming a person at all. Under the M'Naghten test, is an insanity defense likely available?",
    choices: [
      "No, M'Naghten only excuses a defendant who knew the act was wrong but couldn't control it.",
      "Yes, because as a result of mental disease, the defendant did not know the nature and quality of his act.",
      "No, because voluntary intoxication, not insanity, is the only excuse for such conduct.",
      "Yes, but only if the defendant also has a documented history of violence."
    ],
    correct: 1,
    explanations: [
      "Incorrect — that description fits the irresistible impulse test, a different and separate standard from M'Naghten.",
      "Correct — M'Naghten excuses a defendant who, due to mental disease, did not know the nature and quality of the act or did not know it was wrong; genuinely not perceiving the act as harming a person fits the first branch.",
      "Incorrect — nothing in the facts involves intoxication; this is a mental-disease-based insanity claim.",
      "Incorrect — a violent history isn't an element of the M'Naghten test."
    ]
  },
  {
    id: "crim-6", subject: "Criminal Law & Procedure",
    prompt: "Police searched a suspect's apartment without a warrant and without any applicable exception, finding a weapon. The weapon led them to a witness, who independently and voluntarily gave a statement implicating the suspect. Can the witness's statement be used at trial?",
    choices: [
      "No, the fruit of the poisonous tree doctrine automatically excludes anything connected to the illegal search, with no exceptions.",
      "Possibly yes, if the connection between the illegal search and the witness's statement is sufficiently attenuated, such as through the witness's independent, voluntary decision to cooperate.",
      "No, because witness statements obtained after any illegal search are always inadmissible as a matter of law.",
      "Yes, because the exclusionary rule never applies to witness testimony, only physical evidence."
    ],
    correct: 1,
    explanations: [
      "Incorrect — the fruit of the poisonous tree doctrine has recognized exceptions, including attenuation.",
      "Correct — courts look at whether intervening events, like a witness's independent and voluntary choice to cooperate, sufficiently attenuate the taint from the original illegality, which can allow the evidence in.",
      "Incorrect — 'always inadmissible' overstates the rule; attenuation and other exceptions can allow such evidence.",
      "Incorrect — the exclusionary rule can reach testimony derived from illegal searches too; it isn't limited to physical evidence."
    ]
  },
  {
    id: "crim-7", subject: "Criminal Law & Procedure",
    prompt: "Defendant was confronted by an aggressor brandishing a knife in a dark alley with no clear escape route. Defendant, in a jurisdiction with no duty to retreat, immediately drew a gun and shot the aggressor. Is defendant's self-defense claim likely to succeed?",
    choices: [
      "No, deadly force can never be used to repel a non-deadly threat.",
      "Yes, if defendant reasonably believed deadly force was necessary to prevent imminent death or serious bodily harm, and the jurisdiction imposes no duty to retreat.",
      "No, because defendant must always attempt to retreat before using any force, regardless of jurisdiction.",
      "Yes, but only if defendant first announced an intent to act in self-defense."
    ],
    correct: 1,
    explanations: [
      "Incorrect — a knife can present a deadly threat, so deadly force could be reasonable here, not per se barred.",
      "Correct — self-defense with deadly force is justified when a defendant reasonably believes it's necessary to prevent imminent death or serious bodily harm, and in a no-retreat jurisdiction, there's no obligation to flee first.",
      "Incorrect — that describes a duty-to-retreat rule, which the facts say doesn't apply in this jurisdiction.",
      "Incorrect — there's no requirement to verbally announce self-defense before acting."
    ]
  },
  {
    id: "crim-8", subject: "Criminal Law & Procedure",
    prompt: "An employee, entrusted with her employer's cash register, was authorized to handle the money as part of her job but not to keep it. She took $500 from the register for personal use, intending never to return it. Is this larceny or embezzlement?",
    choices: [
      "Larceny, because any unauthorized taking of money is always larceny.",
      "Embezzlement, because she lawfully possessed the money as part of her employment and then fraudulently converted it to her own use.",
      "Neither, because employees can never be criminally liable for handling employer funds.",
      "Larceny, because she physically touched the money without the owner present."
    ],
    correct: 1,
    explanations: [
      "Incorrect — larceny requires a trespassory taking; here she already had lawful possession, which points to embezzlement instead.",
      "Correct — embezzlement is the fraudulent conversion of property already in the defendant's lawful possession, which fits an employee entrusted with handling (but not keeping) employer funds.",
      "Incorrect — employees absolutely can be criminally liable for misusing entrusted funds; that's the essence of embezzlement.",
      "Incorrect — physical handling isn't the key distinction; lawful possession versus a trespassory taking is what separates embezzlement from larceny."
    ]
  },
  {
    id: "crim-9", subject: "Criminal Law & Procedure",
    prompt: "A defendant was tried and acquitted of robbery in state court after a full trial on the merits. The same state later attempts to try him again for the identical robbery based on the same conduct, using newly discovered evidence. Does double jeopardy bar the second prosecution?",
    choices: [
      "No, because new evidence always permits a retrial regardless of an earlier acquittal.",
      "Yes, generally, because the Double Jeopardy Clause bars the same sovereign from retrying a defendant for the same offense after an acquittal, even with new evidence.",
      "No, because double jeopardy only applies to convictions, not acquittals.",
      "Yes, but only if the defendant requests the protection in writing."
    ],
    correct: 1,
    explanations: [
      "Incorrect — new evidence doesn't override the double jeopardy bar after a genuine acquittal by the same sovereign.",
      "Correct — once acquitted after jeopardy has attached, a defendant generally cannot be retried by the same sovereign for the same offense, regardless of newly discovered evidence.",
      "Incorrect — double jeopardy protection applies to acquittals as well as convictions; it's actually strongest after an acquittal.",
      "Incorrect — the protection is automatic; no written request is required to invoke it."
    ]
  },
  {
    id: "crim-10", subject: "Criminal Law & Procedure",
    prompt: "Police took a suspect into custody and began questioning him about a burglary without first advising him of his right to remain silent or to an attorney. He made incriminating statements. At trial, the prosecution seeks to introduce those statements in its case-in-chief. Are they admissible?",
    choices: [
      "Yes, because Miranda warnings are only required if the suspect is formally charged first.",
      "No, statements made during custodial interrogation without Miranda warnings are generally inadmissible in the prosecution's case-in-chief.",
      "Yes, because Miranda warnings are only advisory and have no effect on admissibility.",
      "No, because all statements to police are inadmissible unless a lawyer is present throughout."
    ],
    correct: 1,
    explanations: [
      "Incorrect — Miranda applies based on custody and interrogation, not on whether formal charges have been filed.",
      "Correct — statements obtained from custodial interrogation without proper Miranda warnings are generally excluded from the prosecution's case-in-chief.",
      "Incorrect — Miranda warnings aren't merely advisory; failing to give them has real admissibility consequences.",
      "Incorrect — a lawyer's presence isn't required for every statement; warnings and a valid waiver can be enough."
    ]
  },

  /* ---------------- EVIDENCE ---------------- */
  {
    id: "evidence-1", subject: "Evidence",
    prompt: "At trial, a witness testifies that immediately after witnessing a car crash, a bystander shouted, 'That driver ran the red light!' The statement is offered to prove the driver ran the light. Is it admissible?",
    choices: [
      "No, it is inadmissible hearsay with no applicable exception.",
      "Yes, as a present sense impression describing an event made while or immediately after perceiving it.",
      "No, because excited utterances require the declarant to testify at trial.",
      "Yes, but only if offered against the driver as a party admission."
    ],
    correct: 1,
    explanations: [
      "Incorrect — an applicable hearsay exception does exist here, so it isn't automatically excluded.",
      "Correct — a statement describing an event, made while perceiving it or immediately after, qualifies as a present sense impression, a recognized hearsay exception.",
      "Incorrect — the excited utterance and present sense impression exceptions don't require the declarant to testify at trial.",
      "Incorrect — the statement doesn't need to be a party admission to come in; it independently qualifies under a hearsay exception."
    ]
  },
  {
    id: "evidence-2", subject: "Evidence",
    prompt: "In a civil assault case, the defendant seeks to introduce evidence that the plaintiff has a reputation in the community for being quarrelsome and initiating fights, to support a claim that plaintiff was the first aggressor. Is this character evidence generally admissible?",
    choices: [
      "No, character evidence is never admissible in civil cases.",
      "Yes, because a pertinent character trait of the alleged victim may be offered by the defendant in this context.",
      "No, only specific instances of conduct are admissible, never reputation evidence.",
      "Yes, but only if the plaintiff first introduces evidence of their own good character."
    ],
    correct: 1,
    explanations: [
      "Incorrect — there's a recognized exception for a pertinent trait of an alleged victim, which fits this civil assault scenario.",
      "Correct — most jurisdictions allow evidence of a pertinent character trait of an alleged victim in cases like this one, where first-aggressor status is disputed.",
      "Incorrect — reputation evidence, not just specific instances, is typically the preferred and permitted method for this kind of character proof.",
      "Incorrect — the defendant here doesn't need the plaintiff to open the door first; this exception permits the defendant to raise it directly."
    ]
  },
  {
    id: "evidence-3", subject: "Evidence",
    prompt: "A party seeks to impeach a witness by introducing evidence of the witness's ten-year-old conviction for felony fraud, which involved dishonesty as an element. Is this conviction generally admissible for impeachment?",
    choices: [
      "No, convictions can never be used to impeach a witness's credibility.",
      "Yes, convictions involving dishonesty or false statement are generally admissible to impeach, subject to time limits and balancing tests.",
      "No, only convictions within the last year may ever be used.",
      "Yes, but only if the witness is also the criminal defendant."
    ],
    correct: 1,
    explanations: [
      "Incorrect — impeachment by prior conviction is a well-established tool, not categorically barred.",
      "Correct — convictions involving dishonesty or false statement are generally admissible for impeachment, though older convictions can trigger additional balancing or time-limit rules.",
      "Incorrect — the one-year cutoff isn't the rule; older convictions involving dishonesty can still come in, subject to standards like a ten-year staleness balancing test.",
      "Incorrect — impeachment by conviction applies to any witness, not only a criminal defendant."
    ]
  },
  {
    id: "evidence-4", subject: "Evidence",
    prompt: "A company seeks to introduce a regularly kept sales ledger, created by an employee with personal knowledge at or near the time of each transaction, to prove the contents of a specific sale. No witness who made the entries is available to testify. Is the ledger admissible?",
    choices: [
      "No, records made outside of court by an unavailable witness are always excluded as hearsay.",
      "Yes, potentially under the business records exception, given regular business practice, timeliness, and personal knowledge.",
      "No, because only government records qualify for a records exception.",
      "Yes, but only if a witness who personally made every entry testifies live."
    ],
    correct: 1,
    explanations: [
      "Incorrect — the business records exception exists precisely to admit reliable records without requiring the original preparer's live testimony.",
      "Correct — records regularly kept in the course of business, made near the time of the event by someone with knowledge, generally qualify under the business records exception, typically authenticated through a custodian.",
      "Incorrect — the business records exception applies broadly to business records, not just government records (which have their own separate exception).",
      "Incorrect — the exception is designed so the original entrant need not testify; a custodian or qualified witness can lay the foundation instead."
    ]
  },
  {
    id: "evidence-5", subject: "Evidence",
    prompt: "In a personal injury trial, a party offers gruesome photographs of the plaintiff's injuries. The photographs are relevant to show the extent of harm but are also highly inflammatory. Under Rule 403, how should the court approach admissibility?",
    choices: [
      "Exclude automatically, because any inflammatory evidence is per se inadmissible.",
      "Weigh the photographs' probative value against the danger of unfair prejudice, confusion, or waste of time, excluding only if that danger substantially outweighs the probative value.",
      "Admit automatically, because relevant evidence is always admissible regardless of prejudice.",
      "Exclude automatically, because photographs of injuries are never relevant."
    ],
    correct: 1,
    explanations: [
      "Incorrect — inflammatory evidence isn't automatically excluded; it's balanced against its probative value.",
      "Correct — Rule 403 calls for a balancing test, excluding relevant evidence only when unfair prejudice, confusion, or waste of time substantially outweighs its probative value.",
      "Incorrect — relevance is necessary but not sufficient; Rule 403 can still exclude relevant evidence in the right circumstances.",
      "Incorrect — such photographs are often highly relevant to showing the extent of injury, so they aren't categorically irrelevant."
    ]
  },
  {
    id: "evidence-6", subject: "Evidence",
    prompt: "A party calls a witness to testify about the standard of care in a medical malpractice case. The witness has a medical degree and decades of relevant clinical experience but has never testified in court before. Can the witness qualify to give expert opinion testimony?",
    choices: [
      "No, only witnesses with prior courtroom testimony experience can qualify as experts.",
      "Yes, if the court finds the witness qualified by knowledge, skill, experience, training, or education, regardless of prior testimony history.",
      "No, because only board-certified specialists in the exact sub-specialty may ever testify.",
      "Yes, but only if opposing counsel agrees to the witness's qualifications."
    ],
    correct: 1,
    explanations: [
      "Incorrect — prior courtroom experience isn't a qualification requirement for expert witnesses.",
      "Correct — a witness can qualify as an expert based on knowledge, skill, experience, training, or education; having never testified before doesn't disqualify someone with relevant expertise.",
      "Incorrect — the standard is broader than requiring an exact sub-specialty board certification.",
      "Incorrect — the court, not opposing counsel's agreement, determines whether a witness qualifies as an expert."
    ]
  },
  {
    id: "evidence-7", subject: "Evidence",
    prompt: "A shooting victim, believing she was about to die from her wounds, told a paramedic, 'My husband shot me,' before losing consciousness and later dying. In the husband's homicide trial, is the statement admissible?",
    choices: [
      "No, because the declarant must actually testify for any hearsay exception to apply.",
      "Yes, potentially as a dying declaration, given the statement concerned the cause of death made under a genuine belief of impending death.",
      "No, because dying declarations apply only in civil trials.",
      "Yes, but only if the husband was present when the statement was made."
    ],
    correct: 1,
    explanations: [
      "Incorrect — hearsay exceptions like the dying declaration exist precisely because the declarant often cannot testify.",
      "Correct — a statement about the cause or circumstances of what the declarant believed to be their impending death can qualify as a dying declaration, a recognized hearsay exception.",
      "Incorrect — most jurisdictions extend dying declarations to homicide prosecutions as well as civil cases.",
      "Incorrect — the declarant's belief in impending death and the statement's subject matter are what matter, not whether the accused was present when it was made."
    ]
  },
  {
    id: "evidence-8", subject: "Evidence",
    prompt: "After a customer was injured on a store's staircase, the store installed a new handrail the next day. The customer seeks to introduce evidence of the new handrail to prove the store was negligent for not having one before. Is this evidence generally admissible for that purpose?",
    choices: [
      "Yes, subsequent remedial measures are always admissible to prove negligence.",
      "No, evidence of subsequent remedial measures is generally inadmissible to prove negligence, though it may be admissible for other purposes like ownership or feasibility.",
      "Yes, because any repair after an accident is treated as an admission of fault.",
      "No, because subsequent remedial measures can never be introduced for any purpose."
    ],
    correct: 1,
    explanations: [
      "Incorrect — the rule specifically bars this use, to encourage people to make safety improvements without fear it will be used against them.",
      "Correct — subsequent remedial measures are generally inadmissible to prove negligence or culpable conduct, but can come in for other purposes, such as proving ownership, control, or feasibility of precautionary measures, if disputed.",
      "Incorrect — the rule specifically rejects treating a later repair as an admission of prior fault.",
      "Incorrect — the evidence isn't barred for every purpose, only for proving negligence or fault directly; other permitted purposes exist."
    ]
  },
  {
    id: "evidence-9", subject: "Evidence",
    prompt: "During a criminal trial, the prosecution calls the defendant's spouse to testify about a private conversation the couple had during their marriage regarding the crime. The defendant objects. What privilege issue is most directly raised?",
    choices: [
      "The attorney-client privilege, because spouses are treated like legal representatives.",
      "The marital confidential communications privilege, which can protect private statements made during the marriage.",
      "No privilege applies because spouses can always be compelled to testify against each other.",
      "The physician-patient privilege, because health matters may have been discussed."
    ],
    correct: 1,
    explanations: [
      "Incorrect — spouses aren't treated as attorneys; that privilege doesn't apply here.",
      "Correct — many jurisdictions recognize a marital confidential communications privilege protecting private statements made during the marriage, distinct from any separate spousal testimonial privilege.",
      "Incorrect — that overstates the rule; privilege doctrines specifically limit compelled spousal testimony in various circumstances.",
      "Incorrect — nothing indicates a medical treatment context, so physician-patient privilege isn't implicated here."
    ]
  },
  {
    id: "evidence-10", subject: "Evidence",
    prompt: "A party offers a text message into evidence, claiming it was sent by the opposing party. The proponent has a witness testify that the phone number matched the opposing party's known number and that the content referenced facts only the opposing party would know. Is this sufficient to authenticate the text message?",
    choices: [
      "No, text messages can never be authenticated without the sender's own testimony.",
      "Yes, authentication can be satisfied by circumstantial evidence, such as matching phone number and distinctive content, sufficient for a reasonable jury to find it's what the proponent claims.",
      "No, only messages certified by the phone carrier are admissible.",
      "Yes, but only if the opposing party admits to sending it."
    ],
    correct: 1,
    explanations: [
      "Incorrect — authentication doesn't require the sender's own testimony; circumstantial evidence can suffice.",
      "Correct — authentication only requires enough evidence for a reasonable jury to find the item is what it's claimed to be, and circumstantial details like a matching number and distinctive personal content can meet that bar.",
      "Incorrect — carrier certification isn't a required method; it's just one of several ways to authenticate.",
      "Incorrect — authentication doesn't require the opposing party's admission; that would make the rule far narrower than it actually is."
    ]
  },

  /* ---------------- REAL PROPERTY ---------------- */
  {
    id: "property-1", subject: "Real Property",
    prompt: "A neighbor built a fence two feet onto an adjoining owner's land and used that strip as part of her garden, openly and continuously, for the statutory period of 10 years. The true owner never objected or gave permission. Has the neighbor acquired title to the strip?",
    choices: [
      "No, because a mistaken belief about the boundary defeats an adverse possession claim.",
      "Yes, if her possession was open, notorious, continuous, exclusive, and hostile for the statutory period.",
      "No, because adverse possession never applies to residential property.",
      "Yes, but only after she pays the true owner fair market value for the strip."
    ],
    correct: 1,
    explanations: [
      "Incorrect — in most jurisdictions, a mistaken belief about the boundary doesn't defeat hostility as long as the other elements are met.",
      "Correct — meeting all the elements — open and notorious, continuous, exclusive, and hostile possession for the statutory period — gives rise to title by adverse possession.",
      "Incorrect — adverse possession can apply to residential property just as it can to other land.",
      "Incorrect — no payment to the true owner is required; adverse possession transfers title by operation of law once the elements are satisfied."
    ]
  },
  {
    id: "property-2", subject: "Real Property",
    prompt: "A landowner granted a neighbor a right to cross a specific strip of the landowner's property to reach a public road, recorded in the deed. The landowner later sold the property to a new buyer, who was unaware of the easement but had constructive notice through the public record. Is the new buyer bound by the easement?",
    choices: [
      "No, because easements do not survive a transfer of the burdened land.",
      "Yes, because a properly recorded easement runs with the land and binds subsequent purchasers with notice.",
      "No, because the new buyer had no actual knowledge of the easement.",
      "Yes, but only if the new buyer expressly agreed to honor it in the sale contract."
    ],
    correct: 1,
    explanations: [
      "Incorrect — properly created easements generally do survive a transfer of the burdened estate.",
      "Correct — a recorded easement gives constructive notice and generally runs with the land, binding later purchasers even without actual knowledge.",
      "Incorrect — constructive notice through the recording system is legally sufficient; actual knowledge isn't required.",
      "Incorrect — the buyer doesn't need to separately agree; the recorded easement binds the land regardless of the buyer's consent."
    ]
  },
  {
    id: "property-3", subject: "Real Property",
    prompt: "A tenant's apartment lost heat and hot water for three weeks in winter despite repeated requests to the landlord, making the unit nearly unlivable. The tenant moved out and stopped paying rent, then the landlord sued for unpaid rent. What is the tenant's best defense?",
    choices: [
      "Adverse possession, because the tenant occupied the unit for a period of time.",
      "Constructive eviction, because the landlord's failure to maintain essential services rendered the premises uninhabitable, justifying the tenant's departure.",
      "The statute of frauds, because the lease was not in writing.",
      "Assumption of risk, because the tenant knew winters were cold."
    ],
    correct: 1,
    explanations: [
      "Incorrect — adverse possession is about acquiring title to land, not a defense to a rent claim by a tenant.",
      "Correct — a landlord's substantial failure to maintain essential services, like heat, that renders the unit uninhabitable can support constructive eviction, excusing the tenant's further rent obligation after vacating.",
      "Incorrect — nothing in the facts suggests a writing problem with the lease itself.",
      "Incorrect — assumption of risk doesn't fit; the issue is the landlord's failure to maintain habitability, not a risk the tenant accepted."
    ]
  },
  {
    id: "property-4", subject: "Real Property",
    prompt: "A deed conveys land 'to School District, so long as the land is used for school purposes.' Decades later, the district stops using the land for a school. What happens to title automatically?",
    choices: [
      "Nothing; the district keeps the land forever regardless of use.",
      "Title automatically reverts to the grantor or the grantor's successors, because this created a fee simple determinable with a possibility of reverter.",
      "The land automatically becomes state property regardless of the original grantor.",
      "The district must formally deed the property back before any change in ownership occurs."
    ],
    correct: 1,
    explanations: [
      "Incorrect — the 'so long as' language creates a durational limit on the estate, not an unconditional fee simple.",
      "Correct — 'so long as' language creates a fee simple determinable, which automatically reverts to the grantor (or successors) the moment the stated condition — school use — ends, via the retained possibility of reverter.",
      "Incorrect — the land reverts to the original grantor's interest, not automatically to the state.",
      "Incorrect — a fee simple determinable ends automatically upon the triggering event; no further deed or action is required."
    ]
  },
  {
    id: "property-5", subject: "Real Property",
    prompt: "A seller conveys the same parcel of land to Buyer A, who does not record. The seller then conveys the same parcel to Buyer B, who pays value, has no knowledge of the earlier sale, and promptly records. In a race-notice jurisdiction, who prevails?",
    choices: [
      "Buyer A, because the first grantee always wins regardless of recording.",
      "Buyer B, because as a bona fide purchaser for value without notice who recorded first, she prevails under the race-notice rule.",
      "Buyer A, because recording is irrelevant in every jurisdiction.",
      "Buyer B, only if she also physically moved onto the land before Buyer A."
    ],
    correct: 1,
    explanations: [
      "Incorrect — under a race-notice statute, being first in time doesn't guarantee victory if the later purchaser records first without notice.",
      "Correct — in a race-notice jurisdiction, a subsequent bona fide purchaser who takes without notice of the prior conveyance and records first prevails over the earlier, unrecorded grantee.",
      "Incorrect — recording is central to race-notice (and notice and race) jurisdictions; it's not irrelevant.",
      "Incorrect — physical occupation isn't the deciding factor under a race-notice statute; being a good-faith purchaser who records first is."
    ]
  },
  {
    id: "property-6", subject: "Real Property",
    prompt: "Two siblings own a vacation home as joint tenants with right of survivorship. One sibling, without telling the other, sells her interest in the property to a third party. What is the resulting form of ownership between the third party and the remaining sibling?",
    choices: [
      "The joint tenancy continues unchanged, with the buyer simply replacing the selling sibling as a joint tenant.",
      "The sale severs the joint tenancy as to that share, so the buyer and the remaining sibling now hold as tenants in common.",
      "The sale is void because joint tenants can never transfer their interest without the other's consent.",
      "The remaining sibling automatically gains full title, since any transfer voids the seller's interest entirely."
    ],
    correct: 1,
    explanations: [
      "Incorrect — a conveyance by one joint tenant severs the tenancy as to that interest; the buyer doesn't just step into an unbroken joint tenancy.",
      "Correct — one joint tenant's unilateral transfer severs the joint tenancy for that share, converting the relationship between the new buyer and remaining sibling into a tenancy in common.",
      "Incorrect — a joint tenant can generally transfer her own interest unilaterally; the other joint tenant's consent isn't required.",
      "Incorrect — the transfer doesn't void anything or automatically hand the remaining sibling full title; it severs survivorship as to the sold share instead."
    ]
  },
  {
    id: "property-7", subject: "Real Property",
    prompt: "A homeowner takes out a mortgage loan and defaults after several years of payments, having built up significant equity. Before the foreclosure sale is finalized, can the homeowner pay off the remaining debt in full to reclaim clear title?",
    choices: [
      "No, once default occurs, the homeowner permanently forfeits any right to the property.",
      "Yes, under the equitable right of redemption, the homeowner can pay the full outstanding debt, plus costs, before the foreclosure sale to reclaim the property.",
      "No, only the lender can decide whether to allow repayment after default.",
      "Yes, but only if the homeowner has paid off at least 90 percent of the loan already."
    ],
    correct: 1,
    explanations: [
      "Incorrect — the equitable right of redemption exists precisely to prevent automatic forfeiture upon default.",
      "Correct — before a foreclosure sale is completed, a defaulting borrower generally retains the equitable right of redemption to pay the full debt and costs and reclaim clear title.",
      "Incorrect — the equitable right of redemption is a right the borrower holds, not something solely within the lender's discretion.",
      "Incorrect — there's no percentage-paid threshold for the equitable right of redemption; it exists regardless of how much has been paid, up until the sale is finalized."
    ]
  },
  {
    id: "property-8", subject: "Real Property",
    prompt: "A property owner has operated a small factory for decades under a use classification that a newly enacted zoning ordinance no longer permits in that district. The owner wants to keep operating exactly as before. What is the owner's strongest argument?",
    choices: [
      "That new zoning ordinances automatically apply retroactively to force compliance immediately.",
      "That the operation qualifies as a legal nonconforming use, allowed to continue because it predates the new ordinance.",
      "That zoning ordinances can never restrict any existing property use.",
      "That the owner is entitled to expand the factory to any size under nonconforming use protection."
    ],
    correct: 1,
    explanations: [
      "Incorrect — this is the opposite of the nonconforming use principle, which generally allows pre-existing uses to continue despite a new ordinance.",
      "Correct — a use that lawfully existed before a new zoning ordinance took effect can typically continue as a legal nonconforming use, even though it no longer conforms to current zoning.",
      "Incorrect — zoning can and does restrict property uses generally; the protection here is specifically for the pre-existing, lawfully established use.",
      "Incorrect — nonconforming use protection generally allows continuation of the existing use, not unlimited expansion of it."
    ]
  },
  {
    id: "property-9", subject: "Real Property",
    prompt: "A tenant installed custom, built-in shelving that was bolted to the walls of a rented commercial space, intended to remain permanently as part of the space. At the end of the lease, can the tenant remove the shelving?",
    choices: [
      "Yes, tenants may always remove anything they personally installed, regardless of how it's attached.",
      "Likely no, because permanently affixed items intended to become part of the real estate are treated as fixtures, belonging to the landlord absent an agreement otherwise.",
      "Yes, because only items installed by the landlord can ever become fixtures.",
      "No, because commercial tenants can never install anything without the landlord's written permission."
    ],
    correct: 1,
    explanations: [
      "Incorrect — that overstates tenant removal rights; items intended to permanently become part of the real estate are treated differently.",
      "Correct — items that are permanently affixed and intended to become a permanent part of the property are generally treated as fixtures and pass with the real estate, absent a contrary agreement.",
      "Incorrect — fixtures can be created by whoever installs an item, tenant or landlord, based on the manner and intent of attachment.",
      "Incorrect — the issue is whether the item became a fixture, not simply whether prior written permission existed for installation."
    ]
  },
  {
    id: "property-10", subject: "Real Property",
    prompt: "A subdivision's recorded deeds each contain an identical restriction limiting lots to single-family residential use, intended to benefit all lot owners in the development. One owner begins operating a small business out of her home in violation of the restriction. Can a neighboring lot owner enforce the restriction?",
    choices: [
      "No, only the original developer, and no one else, can ever enforce such a restriction.",
      "Yes, if the restriction is an enforceable covenant running with the land, neighboring owners within the common scheme can generally enforce it.",
      "No, because restrictive covenants limiting land use are always unenforceable as against public policy.",
      "Yes, but only if the violating owner has been paid to remove the restriction."
    ],
    correct: 1,
    explanations: [
      "Incorrect — under a common development scheme, other lot owners, not just the original developer, can typically enforce mutual restrictive covenants.",
      "Correct — where a restriction is intended to run with the land as part of a common development scheme, neighboring owners who are also bound by and benefited from it can generally enforce it against a violating owner.",
      "Incorrect — restrictive covenants on land use are common and enforceable; they aren't categorically void as against public policy.",
      "Incorrect — enforcement doesn't depend on payment to the violator; a valid, applicable covenant can be enforced directly, such as through an injunction."
    ]
  },

  /* ---------------- CONSTITUTIONAL LAW ---------------- */
  {
    id: "conlaw-1", subject: "Constitutional Law",
    prompt: "A taxpayer sues, claiming only that the federal government's general budget allocation to a program violates the Establishment Clause, without alleging any specific personal injury beyond being a taxpayer. Does the taxpayer generally have standing?",
    choices: [
      "Yes, any taxpayer automatically has standing to challenge any federal expenditure.",
      "No, generalized taxpayer status alone is usually insufficient to establish standing.",
      "Yes, because Establishment Clause claims are exempt from ordinary standing rules.",
      "No, because only state attorneys general may bring constitutional challenges."
    ],
    correct: 1,
    explanations: [
      "Incorrect — general taxpayer status alone doesn't automatically confer standing to challenge any and all federal spending.",
      "Correct — a generalized grievance shared by all taxpayers is usually not the concrete, particularized injury needed for standing, though narrow exceptions exist for certain taxing-and-spending challenges.",
      "Incorrect — Establishment Clause claims aren't categorically exempt from ordinary standing analysis; only a narrow exception applies in limited circumstances.",
      "Incorrect — private individuals, not just state attorneys general, can bring constitutional challenges when they satisfy standing requirements."
    ]
  },
  {
    id: "conlaw-2", subject: "Constitutional Law",
    prompt: "Congress passes a law regulating the interstate shipment of a particular agricultural product, including shipments that cross state lines only occasionally. A grower challenges the law, arguing Congress lacks power because her own farm sells entirely within one state. Under modern Commerce Clause doctrine, is the law likely valid as applied to her?",
    choices: [
      "No, because her individual activity is purely intrastate and has no effect on commerce.",
      "Yes, if her activity, aggregated with similar activity nationwide, could substantially affect interstate commerce.",
      "No, because agricultural regulation is reserved exclusively to the states.",
      "Yes, but only if she personally shipped goods across state lines."
    ],
    correct: 1,
    explanations: [
      "Incorrect — under modern doctrine, an individual's purely local activity can still be regulated if aggregated activity substantially affects interstate commerce.",
      "Correct — the aggregation principle allows Congress to regulate even purely intrastate activity if that activity, combined with similar conduct nationwide, could substantially affect interstate commerce.",
      "Incorrect — agriculture isn't categorically off-limits to federal regulation under the Commerce Clause.",
      "Incorrect — individual interstate shipment isn't required; the aggregate effect of the regulated class of activity is what matters."
    ]
  },
  {
    id: "conlaw-3", subject: "Constitutional Law",
    prompt: "A state law explicitly grants a certain government benefit only to citizens of a particular race. What level of scrutiny will a court apply to this racial classification, and who bears the burden?",
    choices: [
      "Rational basis review, with the challenger bearing the burden of proving no legitimate purpose.",
      "Strict scrutiny, with the government bearing the burden of proving the classification is narrowly tailored to a compelling interest.",
      "Intermediate scrutiny, with the burden split evenly between both parties.",
      "No scrutiny is required because the legislature has plenary power over benefit programs."
    ],
    correct: 1,
    explanations: [
      "Incorrect — racial classifications trigger the highest level of scrutiny, not the most deferential one.",
      "Correct — explicit racial classifications by the government are subject to strict scrutiny, requiring the government to prove the law is narrowly tailored to serve a compelling governmental interest.",
      "Incorrect — intermediate scrutiny applies to categories like gender, not race, which gets strict scrutiny.",
      "Incorrect — even benefit programs are subject to equal protection review when they classify explicitly by race."
    ]
  },
  {
    id: "conlaw-4", subject: "Constitutional Law",
    prompt: "A city ordinance bans all public demonstrations that criticize city government officials, while allowing demonstrations supporting them. A group challenges the ordinance after being denied a permit to protest. What is the correct First Amendment framework?",
    choices: [
      "Rational basis review, because permit denials are purely administrative decisions.",
      "Strict scrutiny, because this is a content-based (and viewpoint-based) restriction on speech in a public forum.",
      "No First Amendment scrutiny applies to any regulation of demonstrations.",
      "Intermediate scrutiny, because all restrictions on protests are treated as content-neutral time, place, and manner rules."
    ],
    correct: 1,
    explanations: [
      "Incorrect — this isn't a neutral administrative rule; it explicitly turns on the viewpoint expressed, triggering much stricter review.",
      "Correct — a law that restricts speech based on its viewpoint (criticizing versus supporting officials) is content- and viewpoint-based, subject to strict scrutiny in a public forum.",
      "Incorrect — demonstrations and protests are core expressive activity, squarely within First Amendment protection.",
      "Incorrect — this ordinance discriminates based on viewpoint, so it isn't a content-neutral time, place, and manner regulation, which would get intermediate scrutiny instead."
    ]
  },
  {
    id: "conlaw-5", subject: "Constitutional Law",
    prompt: "A state agency terminates a tenured public employee's job without any notice or opportunity to respond, based on unverified allegations of misconduct. The employee had a state law entitlement to continued employment absent good cause. What constitutional claim is strongest?",
    choices: [
      "A Fourth Amendment claim, because the termination was an unreasonable seizure.",
      "A procedural due process claim, because a protected property interest in continued employment was deprived without adequate notice and an opportunity to be heard.",
      "An Eighth Amendment claim, because termination is a form of cruel and unusual punishment.",
      "No constitutional claim exists because employment is always an at-will relationship."
    ],
    correct: 1,
    explanations: [
      "Incorrect — job termination isn't a Fourth Amendment seizure of a person or property in the relevant sense.",
      "Correct — a state law entitlement to continued employment absent good cause creates a protected property interest, and due process generally requires notice and an opportunity to respond before such a deprivation.",
      "Incorrect — the Eighth Amendment concerns criminal punishment, not civil employment termination.",
      "Incorrect — the facts specifically describe a for-cause employment protection, not at-will employment, which is what creates the protected property interest here."
    ]
  },
  {
    id: "conlaw-6", subject: "Constitutional Law",
    prompt: "A city passes an ordinance restricting how a landowner may use her property so severely that it eliminates essentially all economically beneficial use of the land, though the landowner retains bare legal title. Does this likely constitute a taking requiring just compensation?",
    choices: [
      "No, because the government never has to pay for regulations, only for physical seizures of land.",
      "Yes, a regulation that deprives an owner of all economically viable use of the land can constitute a regulatory taking requiring just compensation.",
      "No, because retaining legal title always defeats any takings claim.",
      "Yes, but only if the government also physically occupies the land."
    ],
    correct: 1,
    explanations: [
      "Incorrect — regulatory takings, not just physical seizures, can require compensation under modern doctrine.",
      "Correct — a regulation that denies an owner all economically beneficial use of land can constitute a regulatory taking, entitling the owner to just compensation, even without a physical taking.",
      "Incorrect — retaining bare legal title doesn't automatically defeat a takings claim if all economic use has been eliminated.",
      "Incorrect — physical occupation isn't required for a regulatory taking; a severe enough use restriction alone can suffice."
    ]
  },
  {
    id: "conlaw-7", subject: "Constitutional Law",
    prompt: "A privately owned shopping mall, open to the general public but not government-operated, prohibits a group from leafleting on its property. The group claims a First Amendment violation. Is the state action requirement satisfied?",
    choices: [
      "Yes, because any place open to the public is automatically treated as state action.",
      "Generally no, because the mall is a private actor, and the Constitution's free speech protections typically apply only against government, not purely private, conduct.",
      "Yes, because private businesses are always agents of the state once they open to the public.",
      "No, because the First Amendment never applies to any location other than traditional public streets and parks."
    ],
    correct: 1,
    explanations: [
      "Incorrect — mere openness to the public doesn't convert a private business into a state actor.",
      "Correct — the Constitution's protections generally constrain government action, not purely private conduct, so a privately owned mall generally isn't bound by the First Amendment absent a sufficient government nexus.",
      "Incorrect — private businesses aren't automatically treated as state agents just by operating publicly accessible premises.",
      "Incorrect — the First Amendment can apply beyond traditional public forums in some contexts; the real issue here is the absence of state action, not the type of location."
    ]
  },
  {
    id: "conlaw-8", subject: "Constitutional Law",
    prompt: "A state law directly conflicts with a valid federal statute regulating the same subject matter, where Congress has clear authority to legislate. Which law controls?",
    choices: [
      "The state law, because states retain ultimate sovereignty over all local matters.",
      "The federal law, under the Supremacy Clause, because valid federal law preempts conflicting state law.",
      "Neither law is enforceable once a conflict is identified.",
      "Whichever law was enacted first in time controls."
    ],
    correct: 1,
    explanations: [
      "Incorrect — state sovereignty doesn't override a valid, conflicting exercise of federal power within Congress's authority.",
      "Correct — under the Supremacy Clause, valid federal law is the supreme law of the land, and a directly conflicting state law is preempted.",
      "Incorrect — the resolution isn't mutual invalidation; it's that federal law prevails and the state law is preempted to the extent of the conflict.",
      "Incorrect — priority in time isn't the test for a preemption conflict; the constitutional hierarchy under the Supremacy Clause controls."
    ]
  },
  {
    id: "conlaw-9", subject: "Constitutional Law",
    prompt: "A state law requires all businesses to close on Sundays, citing a general day-of-rest rationale, without any religious purpose in its text or legislative history, and it applies uniformly to all businesses regardless of the owner's faith. A business owner whose religion observes a different holy day challenges the law under the Free Exercise Clause. What is the most likely outcome?",
    choices: [
      "The law is automatically invalid because it burdens religious practice at all.",
      "The law is likely upheld, because a neutral, generally applicable law that incidentally burdens religious practice typically does not violate the Free Exercise Clause.",
      "The law is automatically invalid because all Sunday closing laws specifically target religious minorities.",
      "The law cannot be evaluated under the Free Exercise Clause because it involves commercial regulation."
    ],
    correct: 1,
    explanations: [
      "Incorrect — an incidental burden on religious practice from a neutral, generally applicable law doesn't automatically invalidate it.",
      "Correct — under modern Free Exercise doctrine, neutral laws of general applicability are typically upheld even if they incidentally burden religious practice, so long as they aren't targeted at religion.",
      "Incorrect — a neutral, secularly justified law applying uniformly to all businesses isn't automatically treated as targeting religious minorities.",
      "Incorrect — commercial regulations can still be evaluated for their effects on religious exercise; the framework just tends to favor upholding neutral, generally applicable rules."
    ]
  },
  {
    id: "conlaw-10", subject: "Constitutional Law",
    prompt: "A person obtains a valid divorce decree in State A. State B, where the person later resides, is asked to recognize that divorce decree in a subsequent legal proceeding. Must State B generally give effect to State A's judgment?",
    choices: [
      "No, each state may freely ignore the judgments of every other state.",
      "Yes, under the Full Faith and Credit Clause, a valid judgment from one state is generally entitled to recognition and enforcement in other states.",
      "No, because divorce decrees are always excluded from full faith and credit obligations.",
      "Yes, but only if both states have identical divorce laws."
    ],
    correct: 1,
    explanations: [
      "Incorrect — that's contrary to the core purpose of the Full Faith and Credit Clause.",
      "Correct — the Full Faith and Credit Clause generally requires states to recognize and give effect to valid judgments from sister states, including divorce decrees rendered with proper jurisdiction.",
      "Incorrect — divorce decrees aren't categorically excluded; they're generally entitled to recognition like other valid judgments.",
      "Incorrect — identical underlying laws between states aren't required; it's the validity of the original judgment that matters most."
    ]
  },

  /* ---------------- CIVIL PROCEDURE ---------------- */
  {
    id: "civpro-1", subject: "Civil Procedure",
    prompt: "A plaintiff domiciled in State X sued a defendant domiciled in State Y in federal court in State Y, alleging only state-law breach of contract claims and seeking $100,000 in damages. Does the federal court have subject matter jurisdiction?",
    choices: [
      "No, because state-law claims can never be heard in federal court.",
      "Yes, under diversity jurisdiction, because the parties are citizens of different states and the amount in controversy exceeds $75,000.",
      "No, because federal question jurisdiction is required for any federal case.",
      "Yes, but only if both parties agree in writing to federal jurisdiction."
    ],
    correct: 1,
    explanations: [
      "Incorrect — diversity jurisdiction exists specifically to let federal courts hear state-law claims between citizens of different states.",
      "Correct — with complete diversity between the parties and an amount in controversy exceeding $75,000, diversity jurisdiction under 28 U.S.C. § 1332 is satisfied.",
      "Incorrect — federal question jurisdiction is one basis for federal jurisdiction, but diversity jurisdiction is an independent, sufficient basis here.",
      "Incorrect — subject matter jurisdiction can't be created by mere party agreement; it must satisfy statutory requirements like diversity or federal question."
    ]
  },
  {
    id: "civpro-2", subject: "Civil Procedure",
    prompt: "A plaintiff sues a defendant in federal court, and the complaint's only claim is a federal civil rights claim brought under a federal statute. There is no diversity between the parties. Does the federal court have subject matter jurisdiction?",
    choices: [
      "No, because federal courts can never hear cases without complete diversity.",
      "Yes, under federal question jurisdiction, because the claim arises under federal law.",
      "No, because civil rights claims must always be brought in state court first.",
      "Yes, but only if the amount in controversy exceeds $75,000."
    ],
    correct: 1,
    explanations: [
      "Incorrect — federal question jurisdiction is an independent basis that doesn't require diversity at all.",
      "Correct — under 28 U.S.C. § 1331, a claim arising under federal law gives federal courts subject matter jurisdiction, regardless of the parties' citizenship.",
      "Incorrect — plaintiffs generally aren't required to exhaust state court remedies before bringing a federal civil rights claim in federal court.",
      "Incorrect — unlike diversity jurisdiction, federal question jurisdiction has no amount-in-controversy requirement."
    ]
  },
  {
    id: "civpro-3", subject: "Civil Procedure",
    prompt: "An out-of-state company has no offices or employees in the forum state but shipped products directly to customers there for years, generating substantial revenue from that state, and the lawsuit arises from one of those product sales. Can the forum state's courts likely exercise personal jurisdiction over the company?",
    choices: [
      "No, personal jurisdiction requires the defendant to have a physical office in the state.",
      "Yes, likely under specific personal jurisdiction, because the company purposefully availed itself of the forum state's market and the suit arises from those very activities.",
      "No, because corporations can only be sued where they are incorporated.",
      "Yes, but only if the company's total national revenue exceeds a specific statutory threshold."
    ],
    correct: 1,
    explanations: [
      "Incorrect — a physical office isn't required; purposeful availment of the forum's market can be enough.",
      "Correct — deliberately and regularly shipping products into a state for profit shows purposeful availment, and since the suit arises from those very sales, specific personal jurisdiction is likely proper.",
      "Incorrect — corporations can be sued in other states too, including where they're subject to general or specific jurisdiction.",
      "Incorrect — there's no fixed national-revenue threshold; the analysis focuses on purposeful contacts with the forum state and their connection to the claim."
    ]
  },
  {
    id: "civpro-4", subject: "Civil Procedure",
    prompt: "A plaintiff files a lawsuit in a federal district where neither party resides and where none of the events giving rise to the claim occurred, though the defendant does not object. Is venue proper?",
    choices: [
      "No, venue defects can never be waived under any circumstances.",
      "Improper venue can generally be waived if the defendant fails to timely object, so the case may proceed there despite the technical defect.",
      "Yes, venue is always proper in any district the plaintiff chooses.",
      "No, because federal venue rules are jurisdictional and cannot depend on the defendant's conduct."
    ],
    correct: 1,
    explanations: [
      "Incorrect — venue, unlike subject matter jurisdiction, is a personal privilege that can be waived.",
      "Correct — venue objections must generally be timely raised or they're waived, meaning a technically improper venue can still proceed if the defendant doesn't object in time.",
      "Incorrect — venue statutes still set specific rules about where a suit may properly be filed; it isn't unlimited plaintiff choice.",
      "Incorrect — venue rules, unlike subject matter jurisdiction, are not jurisdictional in the constitutional sense and can be waived by a party's conduct."
    ]
  },
  {
    id: "civpro-5", subject: "Civil Procedure",
    prompt: "A federal court sitting in diversity jurisdiction must decide a state-law negligence claim, and no federal statute or rule directly addresses the substantive standard of care at issue. Which body of law governs the substantive standard?",
    choices: [
      "Federal common law, because federal courts always create their own substantive rules in diversity cases.",
      "The relevant state's substantive law, under the Erie doctrine, because federal courts sitting in diversity generally apply state substantive law.",
      "The law of whichever state has the most favorable rule for the plaintiff.",
      "No substantive law applies; only federal procedural rules control the outcome."
    ],
    correct: 1,
    explanations: [
      "Incorrect — the Erie doctrine specifically rejects a general federal common law for diversity cases on matters of substantive state law.",
      "Correct — under Erie, a federal court sitting in diversity applies the substantive law of the relevant state, while federal procedural rules still govern procedural matters.",
      "Incorrect — the choice isn't simply whichever state's rule most favors the plaintiff; standard choice-of-law principles determine which state's law applies.",
      "Incorrect — procedural rules govern how the case is litigated, but substantive state law still determines the underlying rights and standards at issue."
    ]
  },
  {
    id: "civpro-6", subject: "Civil Procedure",
    prompt: "A plaintiff has two related but legally distinct claims against the same defendant arising from the same transaction: breach of contract and fraud. Can the plaintiff bring both claims in a single lawsuit?",
    choices: [
      "No, a plaintiff may only assert one claim per lawsuit under federal procedure.",
      "Yes, under the rules permitting joinder of claims, a plaintiff may join as many claims as they have against an opposing party in one action.",
      "No, contract and tort claims can never be combined in the same complaint.",
      "Yes, but only if a court grants special pretrial permission before filing."
    ],
    correct: 1,
    explanations: [
      "Incorrect — federal procedure specifically allows joinder of multiple claims against the same party in a single action.",
      "Correct — the joinder of claims rule broadly allows a plaintiff to join as many claims, related or not, as they have against an opposing party in a single lawsuit.",
      "Incorrect — contract and tort theories can be joined together when they involve the same parties, even from the same or different transactions.",
      "Incorrect — no special pretrial court permission is needed to join claims under the ordinary joinder rules."
    ]
  },
  {
    id: "civpro-7", subject: "Civil Procedure",
    prompt: "After discovery closes, a defendant moves for summary judgment, arguing there's no genuine dispute of material fact and it's entitled to judgment as a matter of law. The plaintiff responds only with unsupported allegations from the complaint, no affidavits or evidence. How should the court likely rule?",
    choices: [
      "Deny summary judgment automatically, because any factual allegation in a complaint creates a triable issue.",
      "Likely grant summary judgment, because a party opposing a properly supported motion must come forward with actual evidence, not rely on unsupported pleading allegations, to show a genuine factual dispute.",
      "Deny summary judgment, because summary judgment is never available before trial.",
      "Grant summary judgment automatically in favor of whichever party filed first."
    ],
    correct: 1,
    explanations: [
      "Incorrect — mere unsupported allegations in a pleading, without evidence, generally aren't enough to defeat a properly supported summary judgment motion.",
      "Correct — once a properly supported motion is made, the non-movant must set forth specific facts, through evidence like affidavits or discovery materials, showing a genuine issue for trial; unsupported allegations alone are insufficient.",
      "Incorrect — summary judgment is specifically a pretrial mechanism for resolving cases without a genuine factual dispute.",
      "Incorrect — the timing of filing isn't the standard; the substantive summary judgment standard about genuine disputes of material fact controls."
    ]
  },
  {
    id: "civpro-8", subject: "Civil Procedure",
    prompt: "A group of plaintiffs seeks to certify a class action alleging a common defective product design affecting thousands of purchasers nationwide. What must they generally show to satisfy the core class certification requirements?",
    choices: [
      "Only that there are enough class members that individual lawsuits would be impractical.",
      "Numerosity, commonality, typicality, and adequacy of representation, among other class certification requirements.",
      "That every single class member suffered the exact same dollar amount of damages.",
      "That the defendant consents to being sued as a class action."
    ],
    correct: 1,
    explanations: [
      "Incorrect — numerosity is only one of several required elements, not the sole requirement.",
      "Correct — class certification generally requires numerosity, commonality, typicality, and adequacy of representation, plus satisfying one of the additional class-action category requirements.",
      "Incorrect — identical damages amounts across all class members aren't required; common questions of law or fact are what matter for commonality.",
      "Incorrect — class certification doesn't depend on the defendant's consent; it's decided by the court applying the certification standards."
    ]
  },
  {
    id: "civpro-9", subject: "Civil Procedure",
    prompt: "A plaintiff files a lawsuit in state court asserting only a federal law claim against a defendant who is a citizen of the same state as the plaintiff. Can the defendant remove the case to federal court?",
    choices: [
      "No, removal is never available in any case lacking diversity.",
      "Yes, because the case could have originally been filed in federal court based on federal question jurisdiction, so it is removable regardless of diversity.",
      "No, because only plaintiffs, not defendants, can choose a federal forum.",
      "Yes, but only if the defendant is a citizen of a different state than the plaintiff."
    ],
    correct: 1,
    explanations: [
      "Incorrect — removal based on federal question jurisdiction doesn't require diversity between the parties.",
      "Correct — a case that could have originally been brought in federal court, including one based on federal question jurisdiction, is generally removable by the defendant regardless of the parties' citizenship.",
      "Incorrect — removal is specifically a mechanism available to defendants to move a case into federal court.",
      "Incorrect — that diversity-based removal limitation doesn't apply here, since federal question jurisdiction independently supports removal."
    ]
  },
  {
    id: "civpro-10", subject: "Civil Procedure",
    prompt: "A plaintiff sued a defendant for breach of contract and lost after a full trial on the merits, with a final judgment entered. The plaintiff later files a second lawsuit against the same defendant, based on the same contract and the same underlying transaction, seeking a different legal theory of recovery. Is the second suit likely barred?",
    choices: [
      "No, a plaintiff can always relitigate the same transaction under a new legal theory.",
      "Yes, under claim preclusion (res judicata), a final judgment on the merits generally bars relitigation of claims arising from the same transaction, even under a new theory.",
      "No, because res judicata only applies if the exact same legal theory is used again.",
      "Yes, but only if the second suit is filed in the same court as the first."
    ],
    correct: 1,
    explanations: [
      "Incorrect — that's exactly what claim preclusion is designed to prevent once there's been a final judgment on the merits.",
      "Correct — claim preclusion bars a party from relitigating claims that were or could have been raised in a prior action on the same transaction, once a final judgment on the merits has been entered, regardless of a new legal theory.",
      "Incorrect — claim preclusion specifically extends to new theories based on the same underlying transaction, not just identical theories.",
      "Incorrect — claim preclusion doesn't depend on refiling in the same court; it bars relitigation of the claim generally, wherever it's brought."
    ]
  }
];

/* MEE-style essay prompts. Since essays can't be auto-graded, each has a
   short checklist of issues a strong answer should spot — self-grade
   honestly against it. */
const MEE_QUESTIONS = [
  {
    id: "bizassoc-1", subject: "Business Associations",
    prompt: "Two friends orally agreed to run a lawn-care business together, splitting profits equally, without filing any formation documents. One friend later signed a contract with a supplier in the business's name, without telling the other. The supplier was never paid. Discuss what type of business entity was likely formed and each friend's potential liability to the supplier.",
    checklist: [
      "Identifies that, absent formation documents, this is likely a general partnership by default",
      "Notes partners are generally jointly and severally liable for partnership obligations",
      "Discusses actual or apparent authority to bind the partnership to the supplier contract",
      "Addresses each partner's personal liability for the unpaid debt"
    ]
  },
  {
    id: "family-1", subject: "Family Law",
    prompt: "A married couple separated. One spouse continued making mortgage payments on the marital home from post-separation earnings for two years before the divorce was finalized. Discuss how a court would likely characterize the home and the post-separation payments upon divorce.",
    checklist: [
      "Distinguishes separate vs. marital/community property and when the characterization is fixed (e.g., date of separation)",
      "Addresses whether post-separation earnings used for payments are separate or community/marital property",
      "Discusses a reimbursement or equitable credit claim for the paying spouse",
      "Notes any presumption and which party bears the burden of tracing"
    ]
  },
  {
    id: "trusts-1", subject: "Trusts & Estates",
    prompt: "A validly executed will left 'my estate to my children, in equal shares.' At the time of execution, the testator had two children. One child predeceased the testator, survived by two children of her own. The will contained no anti-lapse or survivorship clause. Discuss what happens to that child's share.",
    checklist: [
      "Identifies the gift as a lapsed gift absent a saving clause",
      "Analyzes whether the jurisdiction's anti-lapse statute applies to the predeceased child's descendants",
      "Discusses the class-gift issue (gift to 'children' as a class vs. individual gifts)",
      "States the likely disposition: to the predeceased child's issue under anti-lapse, or to the surviving child, or into residue/intestacy if anti-lapse doesn't apply"
    ]
  },
  {
    id: "secured-1", subject: "Secured Transactions",
    prompt: "A lender took a security interest in a small business's 'inventory, now owned or after-acquired,' filed a financing statement, but never took possession of any goods. A second lender later loaned money secured by the same inventory and also filed. Discuss priority between the two lenders under Article 9.",
    checklist: [
      "Identifies attachment requirements (value, rights in collateral, security agreement) are satisfied for a valid security interest",
      "Notes that filing a financing statement perfects a security interest in inventory (no possession required)",
      "Applies the first-to-file-or-perfect priority rule between competing perfected secured creditors",
      "Addresses the after-acquired property clause's effect on newly acquired inventory"
    ]
  },
  {
    id: "conflicts-1", subject: "Conflict of Laws",
    prompt: "A driver domiciled in State A caused a car accident in State B, injuring a passenger domiciled in State C. State A caps damages in personal injury cases; State B and State C do not. The suit is filed in State B. Discuss what approach a court would likely use to determine which state's damages rule applies.",
    checklist: [
      "Identifies this as a choice-of-law issue and names a relevant approach (most significant relationship / interest analysis / lex loci delicti)",
      "Applies the chosen approach to the facts (place of injury, domiciles of parties, place of conduct)",
      "Considers whether State A has a genuine interest in applying its damages cap to protect its domiciliary",
      "Reaches a reasoned conclusion about which state's law likely governs damages"
    ]
  },
  {
    id: "civpro-mee-1", subject: "Civil Procedure",
    prompt: "A plaintiff domiciled in State X sued a defendant domiciled in State Y in federal court in State Y, alleging state-law breach of contract claims seeking $100,000 in damages. Discuss whether the federal court has subject matter jurisdiction.",
    checklist: [
      "Identifies diversity jurisdiction as the relevant basis (no federal question presented)",
      "Confirms complete diversity between the parties (different states)",
      "Confirms the amount in controversy exceeds $75,000",
      "Concludes federal subject matter jurisdiction is proper under 28 U.S.C. § 1332"
    ]
  }
];
