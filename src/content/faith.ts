/**
 * Faith and festive days, written with respect for every religion. Precious PS is an educational platform,
 * not a religious one: these activities are optional and offered to families who observe each day.
 * Islamic dates follow the lunar calendar and the moon sighting announced in Nigeria (by the Sultan of
 * Sokoto), so no fixed dates are given. Quiz questions are general religious knowledge, as taught in
 * IRS and CRS, and avoid matters of doctrinal dispute.
 */

export interface SpecialDay { name: string; faith: "Islamic" | "Christian" | "National"; when: string; about: string; activities: string[] }

export const SPECIAL_DAYS: SpecialDay[] = [
  { name: "Ramadan", faith: "Islamic", when: "The ninth month of the Islamic calendar (about 29–30 days)", about: "The month of fasting from dawn to sunset, prayer, reading the Qur'an and charity.", activities: ["Read a short surah each day with its meaning, e.g. Al-Ikhlas (Q112) and Al-Asr (Q103).", "Keep a 'good deeds' chart: help at home, share food, be kind.", "Prepare iftar with the family and invite a neighbour.", "Learn why patience (sabr) is praised in the Qur'an (Q2:153)."] },
  { name: "Laylat al-Qadr (Night of Majesty)", faith: "Islamic", when: "One of the last ten nights of Ramadan", about: "The night the Qur'an is believed to have first been revealed, described as better than a thousand months (Q97).", activities: ["Read Surah Al-Qadr (Q97) and talk about its meaning as a family.", "Write a short gratitude list."] },
  { name: "Eid al-Fitr (Sallah)", faith: "Islamic", when: "1st of Shawwal, at the end of Ramadan", about: "The festival of breaking the fast, with prayer, new clothes, visits and Zakat al-Fitr (charity before the prayer).", activities: ["Help the family give Zakat al-Fitr or food to people in need.", "Make greeting cards saying 'Eid Mubarak' for relatives and neighbours.", "Learn the story of how Ramadan teaches self-discipline and share it with a friend."] },
  { name: "Eid al-Adha (Big Sallah)", faith: "Islamic", when: "10th of Dhul-Hijjah, during the Hajj season", about: "Remembers the willingness of Prophet Ibrahim (Abraham) to obey God, and the ram provided instead (Q37:102–107).", activities: ["Read or listen to the story of Prophet Ibrahim and Ismail and discuss obedience and trust.", "Help share meat with relatives and the poor, as the tradition teaches.", "Draw a picture map of the Hajj journey: Makkah, Mina, Arafat."] },
  { name: "Islamic New Year (1 Muharram)", faith: "Islamic", when: "1st of Muharram", about: "Marks the Hijrah, the migration of Prophet Muhammad (peace be upon him) from Makkah to Madinah.", activities: ["Learn the twelve months of the Islamic calendar.", "Write three good resolutions for the new year."] },
  { name: "Mawlid an-Nabi", faith: "Islamic", when: "12th of Rabi' al-Awwal (a public holiday in Nigeria)", about: "Remembers the birth of Prophet Muhammad (peace be upon him); many families gather for lectures and good deeds.", activities: ["Learn about the Prophet's honesty (he was called Al-Amin, the trustworthy).", "Do one act of kindness for an elderly neighbour."] },
  { name: "Christmas", faith: "Christian", when: "25 December", about: "Celebrates the birth of Jesus Christ.", activities: ["Read the nativity story (Luke 2) and act it out with siblings.", "Make cards for neighbours of every faith.", "Share food or gifts with people in need."] },
  { name: "Good Friday and Easter", faith: "Christian", when: "March or April (dates change each year)", about: "Good Friday remembers the death of Jesus; Easter Sunday celebrates his resurrection.", activities: ["Read the Easter story (e.g. Luke 24) and discuss hope and forgiveness.", "Decorate eggs as a family craft."] },
  { name: "Independence Day", faith: "National", when: "1 October", about: "Nigeria's independence in 1960.", activities: ["Learn the national anthem and pledge by heart.", "Draw the flag and write what unity means to you."] },
  { name: "Children's Day", faith: "National", when: "27 May", about: "A day to celebrate and protect children.", activities: ["Write your dreams for the future.", "Play traditional games such as ayo or ten-ten with friends."] },
  { name: "Democracy Day", faith: "National", when: "12 June", about: "Honours democracy and the 12 June 1993 election.", activities: ["Hold a class or family vote on a fun question to see democracy at work."] },
];

type Q = [stem: string, right: string, w1: string, w2: string, w3: string, why: string];

export const ISLAMIC_QUIZ: Q[] = [
  ["The holy book of Islam is the", "Qur'an", "Torah", "Gospel", "Vedas", "Muslims believe the Qur'an was revealed to Prophet Muhammad (peace be upon him)."],
  ["How many pillars of Islam are there?", "Five", "Three", "Seven", "Ten", "Shahada, Salah, Zakat, Sawm and Hajj."],
  ["The month of fasting in Islam is", "Ramadan", "Shawwal", "Muharram", "Rajab", "Muslims fast from dawn to sunset in Ramadan."],
  ["The first surah of the Qur'an is", "Al-Fatiha", "Al-Baqarah", "Al-Ikhlas", "An-Nas", "Al-Fatiha, 'the Opening', is recited in every unit of prayer."],
  ["How many daily prayers are obligatory?", "Five", "Two", "Three", "Seven", "Fajr, Dhuhr, Asr, Maghrib and Isha."],
  ["The pilgrimage to Makkah is called", "Hajj", "Zakat", "Sawm", "Shahada", "Hajj is required once in a lifetime for those able."],
  ["Charity given at the end of Ramadan is called", "Zakat al-Fitr", "Sadaqah Jariyah", "Hajj", "Khutbah", "It is given before the Eid al-Fitr prayer."],
  ["The city Prophet Muhammad migrated to was", "Madinah", "Makkah", "Jerusalem", "Cairo", "The Hijrah to Madinah marks the start of the Islamic calendar."],
  ["How many surahs are in the Qur'an?", "114", "100", "99", "150", "The Qur'an has 114 chapters (surahs)."],
  ["The last surah of the Qur'an is", "An-Nas", "Al-Fatiha", "Al-Falaq", "Al-Kawthar", "An-Nas is the 114th surah."],
  ["The Prophet who was swallowed by a great fish was", "Yunus (Jonah)", "Musa (Moses)", "Isa (Jesus)", "Nuh (Noah)", "His prayer from inside the fish is in Q21:87."],
  ["The Prophet who built the Ark was", "Nuh (Noah)", "Ibrahim", "Yusuf", "Dawud", "The story of Nuh is told in several surahs, including Surah Nuh (Q71)."],
  ["Eid al-Adha remembers the obedience of Prophet", "Ibrahim (Abraham)", "Musa", "Sulaiman", "Yahya", "See Q37:102–107."],
  ["The direction Muslims face in prayer is called the", "Qiblah", "Minbar", "Mihrab", "Adhan", "It faces the Ka'bah in Makkah."],
  ["The call to prayer is called the", "Adhan", "Iqamah", "Khutbah", "Dua", "It is made by the muezzin."],
  ["Friday congregational prayer is called", "Jumu'ah", "Tarawih", "Eid prayer", "Tahajjud", "It replaces Dhuhr on Fridays."],
  ["The night prayers offered in Ramadan are called", "Tarawih", "Jumu'ah", "Fajr", "Witr only", "Many mosques hold Tarawih every night of Ramadan."],
  ["The name 'Al-Amin' given to Prophet Muhammad means", "The trustworthy", "The strong", "The rich", "The king", "He was known for honesty before his prophethood."],
  ["Surah Al-Ikhlas is mainly about", "the Oneness of God", "fasting", "charity", "the Hajj", "It is a short surah of four verses (Q112)."],
  ["Surah Al-Asr teaches the value of", "time and good deeds", "wealth", "travel", "food", "Q103 warns that people are at loss except those who believe, do good and advise truth and patience."],
  ["The Qur'an teaches kindness to parents in", "Surah Al-Isra (Q17:23–24)", "Surah An-Nas", "Surah Al-Kawthar", "Surah Al-Fil", "It says not to speak harshly to parents."],
  ["The Islamic calendar is based on the", "moon", "sun", "stars only", "seasons", "It is a lunar calendar of twelve months."],
  ["The angel who brought revelation to Prophet Muhammad is", "Jibril (Gabriel)", "Mika'il", "Israfil", "Malik", "Jibril is mentioned in the Qur'an."],
  ["Washing before prayer is called", "Wudu (ablution)", "Ghusl only", "Tayammum only", "Iqamah", "Tayammum is used when water is unavailable."],
  ["The Prophet known for patience in great suffering is", "Ayyub (Job)", "Yusuf", "Harun", "Lut", "His patience is praised in Q38:44."],
  ["The Prophet who interpreted dreams in Egypt was", "Yusuf (Joseph)", "Musa", "Isa", "Ibrahim", "Surah Yusuf (Q12) tells his story."],
  ["The Islamic greeting 'As-salamu alaykum' means", "Peace be upon you", "Good morning", "Thank you", "Welcome home", "The reply is 'Wa alaykum as-salam'."],
  ["Sadaqah means", "voluntary charity", "fasting", "pilgrimage", "prayer times", "Any good deed can be sadaqah, even a smile."],
  ["The Qur'an was revealed over about", "23 years", "1 year", "40 years", "100 years", "From about 610 to 632 CE."],
  ["The first word revealed to the Prophet was", "Iqra (Read)", "Salam", "Allah", "Sabr", "Surah Al-Alaq (Q96:1) begins with 'Read'."],
];

export const BIBLE_QUIZ: Q[] = [
  ["The first book of the Bible is", "Genesis", "Exodus", "Matthew", "Psalms", "Genesis tells of creation."],
  ["How many books are in the Protestant Bible?", "66", "39", "27", "73", "39 in the Old Testament and 27 in the New Testament."],
  ["Jesus was born in", "Bethlehem", "Nazareth", "Jerusalem", "Galilee", "See Luke 2 and Matthew 2."],
  ["The man who built the ark was", "Noah", "Abraham", "Moses", "David", "Genesis 6–9."],
  ["The Ten Commandments were given to", "Moses", "Joshua", "Elijah", "Paul", "On Mount Sinai (Exodus 20)."],
  ["David defeated the giant", "Goliath", "Samson", "Pharaoh", "Herod", "1 Samuel 17."],
  ["The prophet swallowed by a great fish was", "Jonah", "Daniel", "Elijah", "Isaiah", "The book of Jonah."],
  ["Daniel was thrown into a den of", "lions", "snakes", "bears", "wolves", "Daniel 6."],
  ["How many disciples did Jesus choose?", "Twelve", "Seven", "Ten", "Forty", "The twelve apostles."],
  ["The first four books of the New Testament are called the", "Gospels", "Epistles", "Psalms", "Prophets", "Matthew, Mark, Luke and John."],
  ["The parable of the Good Samaritan teaches", "love for one's neighbour", "how to farm", "how to fish", "how to build", "Luke 10:25–37."],
  ["Jesus fed five thousand people with five loaves and", "two fish", "ten fish", "one fish", "no fish", "A miracle told in all four Gospels."],
  ["The king known for wisdom was", "Solomon", "Saul", "Ahab", "Herod", "1 Kings 3."],
  ["Joseph was sold by his", "brothers", "father", "uncle", "friends", "Genesis 37."],
  ["The Lord's Prayer begins with", "Our Father", "In the beginning", "Blessed are", "The Lord is my shepherd", "Matthew 6:9."],
  ["'The Lord is my shepherd' is the first line of Psalm", "23", "1", "100", "51", "A well-known psalm of David."],
  ["Jesus' first miracle was turning water into wine at", "Cana", "Bethany", "Jericho", "Capernaum", "John 2."],
  ["The apostle who wrote many letters (epistles) was", "Paul", "Peter", "Thomas", "Judas", "Including Romans and Corinthians."],
  ["The mother of Jesus was", "Mary", "Martha", "Elizabeth", "Ruth", "Luke 1."],
  ["Moses led the Israelites out of", "Egypt", "Babylon", "Rome", "Persia", "The Exodus."],
  ["The story of the Prodigal Son teaches", "forgiveness", "farming", "war", "trade", "Luke 15:11–32."],
  ["Samson's great strength was linked to his", "hair", "sword", "shield", "horse", "Judges 16."],
  ["The last book of the Bible is", "Revelation", "Acts", "Jude", "Malachi", "Revelation closes the New Testament."],
  ["Ruth said to Naomi, 'Your people shall be my people', showing", "loyalty", "anger", "pride", "fear", "Ruth 1:16."],
  ["The Sermon on the Mount begins with the", "Beatitudes", "Psalms", "Proverbs", "Commandments", "Matthew 5."],
  ["Christians celebrate the resurrection of Jesus at", "Easter", "Christmas", "Pentecost", "Advent", "Easter Sunday."],
  ["The apostle who denied Jesus three times was", "Peter", "John", "James", "Andrew", "He later became a great leader of the church."],
  ["The book of Proverbs is mostly about", "wisdom", "battles", "laws of sacrifice", "kings' lists", "Practical sayings for good living."],
  ["Abraham's son of promise was", "Isaac", "Esau", "Jacob", "Ishmael", "Genesis 21."],
  ["The Holy Spirit came upon the apostles at", "Pentecost", "Christmas", "Passover", "Easter", "Acts 2."],
];
