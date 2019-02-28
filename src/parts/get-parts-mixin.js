export default {
  created() {
    this.$store.dispatch('patterns/getParts');
  },
  computed: {
    parts() {
      return this.$store.state.patterns.parts || {
        tops: [],
        sides: [],
        centers: [],
        bases: [],
      };
    },
  },
};

