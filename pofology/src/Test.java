    public boolean containsMeeting(StringMeeting meeting) {
      int startValue = getValue(this.start);
      int endValue = getValue(this.end);
      int meetingStart = getValue(meeting.start);
      int meetingEnd = getValue(meeting.end);
      if(startValue < meetingStart && endValue > meetingStart) {
        return true;
      } else if(
        startValue < meetingEnd 
        && startValue > meetingStart 
        && endValue > meetingEnd){
        return true;
      } else if(startValue < meetingStart && endValue > meetingStart && endValue < meetingEnd) {
        return true;
      } else {
        return false;
      }
    }
