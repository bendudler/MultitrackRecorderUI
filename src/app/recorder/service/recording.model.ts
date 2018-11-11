export interface RecordingModel {
  id: number;
  name: string;
  date: string;
  tracks: Track[];
}

export interface Track {
  id: number;
  trackNumber: number;
  name: string;
  channels: ChannelRecordingFile[];
}

export interface ChannelRecordingFile {
  id: number;
  channelNr: number;
  name: string;
  size: number;
}

export class RecordingModelFactory {
  static createRecording(name, date): RecordingModel {
    return {
      id: null,
      name, date,
      tracks: []
    } as RecordingModel;
  }

  static createTrack(trackNumber, name) {
    return {
      id: null,
      trackNumber,
      name,
      channels: []
    }
  }
}
