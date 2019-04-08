/*
Every email consists of a local name and a domain name, separated by the @ sign.

For example, in alice@leetcode.com, alice is the local name, and leetcode.com is the domain name.

Besides lowercase letters, these emails may contain '.'s or '+'s.

If you add periods ('.') between some characters in the local name part of an email address, 
mail sent there will be forwarded to the same address without dots in the local name.  
For example, "alice.z@leetcode.com" and "alicez@leetcode.com" forward to the same email address.  
(Note that this rule does not apply for domain names.)

If you add a plus ('+') in the local name, everything after the first plus sign will be ignored. 
This allows certain emails to be filtered, for example m.y+name@email.com will be forwarded to my@email.com.  
(Again, this rule does not apply for domain names.)

It is possible to use both of these rules at the same time.

Given a list of emails, we send one email to each address in the list.  How many different addresses actually receive mails? 
*/

/**
 * @param {string[]} emails
 * @return {number}
 */
const numUniqueEmails = function(emails) {
  const map = new Map();
  emails.forEach(email => {
    const clean = cleanEmail(email);
    if (!map.has(clean)) {
      map.set(clean);
    }
  });
  return map.size;
};

const cleanEmail = (email) => {
  const indexOfPlus = email.indexOf('+');
  if (indexOfPlus > 0) {
    email = removePlusStringFromLocalName(email, indexOfPlus)
  }
  return removeDotsFromLocalName(email);
}

const removePlusStringFromLocalName = (email, start) => {
  const stop = email.indexOf('@');
  const remove = email.substring(start, stop);
  return email.replace(remove, '');
}

const removeDotsFromLocalName = (email) => {
  const stop = email.indexOf('@');
  const domainName = email.slice(stop, email.length);
  const localName = email.slice(0, stop);
  return `${localName.replace(/[^\w]/g, '')}${domainName}`;
}

module.exports({ numUniqueEmails });
