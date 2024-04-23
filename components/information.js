import React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, StatusBar } from 'react-native';

const InfoSelection = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.text}>
        Tell me, Muse, of that man, so ready at need, who wandered far and wide, after he had sacked the sacred citadel of Troy, and many were the men whose towns he saw and whose mind he learnt, yea, and many the woes he suffered in his heart on the deep, striving to win his own life and the return of his company. Nay, but even so he saved not his company, though he desired it sore. For through the blindness of their own hearts they perished, fools, who devoured the oxen of Helios Hyperion: but the god took from them their day of returning. Of these things, goddess, daughter of Zeus, whencesoever thou hast heard thereof, declare thou even unto us.
    Now all the rest, as many as fled from sheer destruction, were at home, and had escaped both war and sea, but Odysseus only, craving for his wife and for his homeward path, the lady nymph Calypso held, that fair goddess, in her hollow caves, longing to have him for her lord. But when now the year had come in the courses of the seasons, wherein the gods had ordained that he should return home to Ithaca, not even there was he quit of labours, not even among his own; but all the gods had pity on him save Poseidon, who raged continually against godlike Odysseus, till he came to his own country. Howbeit Poseidon had now departed for the distant Ethiopians, the Ethiopians that are sundered in twain, the uttermost of men, abiding some where Hyperion sinks and some where he rises. There he looked to receive his hecatomb of bulls and rams, there he made merry sitting at the feast, but the other gods were gathered in the halls of Olympian Zeus. Then among them the father of men and gods began to speak, for he bethought him in his heart of noble Aegisthus, whom the son of Agamemnon, far-famed Orestes, slew. Thinking upon him he spake out among the Immortals:
    ‘Lo you now, how vainly mortal men do blame the gods! For of us they say comes evil, whereas they even of themselves, through the blindness of their own hearts, have sorrows beyond that which is ordained. Even as of late Aegisthus, beyond that which was ordained, took to him the wedded wife of the son of Atreus, and killed her lord on his return, and that with sheer doom before his eyes, since we had warned him by the embassy of Hermes the keen-sighted, the slayer of Argos, that he should neither kill the man, nor woo his wife. For the son of Atreus shall be avenged at the hand of Orestes, so soon as he shall come to man’s estate and long for his own country. So spake Hermes, yet he prevailed not on the heart of Aegisthus, for all his good will; but now hath he paid one price for all.’
    And the goddess, grey-eyed Athene, answered him, saying: ‘O father, our father Cronides, throned in the highest; that man assuredly lies in a death that is his due; so perish likewise all who work such deeds! But my heart is rent for wise Odysseus, the hapless one, who far from his friends this long while suffereth affliction in a sea-girt isle, where is the navel of the sea, a woodland isle, and therein a goddess hath her habitation, the daughter of the wizard Atlas, who knows the depths of every sea, and himself upholds the tall pillars which keep earth and sky asunder. His daughter it is that holds the hapless man in sorrow: and ever with soft and guileful tales she is wooing him to forgetfulness of Ithaca. But Odysseus yearning to see if it were but the smoke leap upwards from his own land, hath a desire to die. As for thee, thine heart regardeth it not at all, Olympian! What! Did not Odysseus by the ships of the Argives make thee free offering of sacrifice in the wide Trojan land? Wherefore wast thou then so wroth with him, O Zeus?
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: "#ffffcc",
    marginHorizontal: 20,
    marginTop: 20,
  },
  text: {
    fontSize: 25,
  },
});

export default InfoSelection;