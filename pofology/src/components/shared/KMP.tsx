import React from 'react';

interface KMPProps {
  pattern: string;
  string: string;
}

interface KMPState {
  currentIndex: number;
  patternFound: boolean;
}

class KMP extends React.Component<KMPProps, KMPState> {
  constructor(props: KMPProps) {
    super(props);
    this.state = {
      currentIndex: 0,
      patternFound: false,
    };
  }

  search() {
    // Initialize the KMP table
    const kmpTable = Array(this.props.pattern.length).fill(-1);
    let j = 0;
    for (let i = 1; i < this.props.pattern.length; i++) {
      if (this.props.pattern[i] === this.props.pattern[j]) {
        kmpTable[i] = j;
        j++;
      } else {
        kmpTable[i] = j;
        j = kmpTable[j];
        while (j >= 0 && this.props.pattern[i] !== this.props.pattern[j]) {
          j = kmpTable[j];
        }
        j++;
      }
    }

    // Use the KMP table to search for the pattern within the string
    let i = 0;
    j = 0;
    const interval = setInterval(() => {
      if (i >= this.props.string.length || j >= this.props.pattern.length || this.state.patternFound) {
        clearInterval(interval);
        return;
      }
      if (this.props.string[i] === this.props.pattern[j]) {
        i++;
        j++;
      } else {
        j = kmpTable[j];
        if (j < 0) {
          i++;
          j++;
        }
      }
      this.setState({ currentIndex: i });
      if (j === this.props.pattern.length) {
        this.setState({ patternFound: true });
      }
    }, 500);
  }

  render() {
    const stringWithHighlight =
      this.props.string.slice(0, this.state.currentIndex) +
      '|' +
      this.props.string.slice(this.state.currentIndex);
    return (
      <div>
        <p>{stringWithHighlight}</p>
        <button onClick={() => this.search()}>Search for Pattern</button>
        {this.state.patternFound && <p>Pattern found!</p>}
      </div>
    );
  }
}

export default KMP;
