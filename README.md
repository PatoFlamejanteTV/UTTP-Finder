# UTTP-Finder
A system designed to find specific channels on YouTube. It searches for: UTTP, ZNTP, and YFGA. The search is limited to a maximum of 10 pages.

## How to Get Your YouTube Data API Key
Visit the [Google Cloud Console YouTube API page.](https://console.cloud.google.com/marketplace/product/google/youtube.googleapis.com?q=search&referrer=search&project=advance-avatar-429501-q7)
In the Google Cloud Console, navigate to APIs & Services > Credentials.
Click on Create Credentials > API Key.
Open Script.js and replace YOUR YOUTUBE DATA API KEY on the first line with your newly generated API key.
You should now be ready to use!

## Troubleshooting
### API Key Not Working

Ensure you have copied the API key correctly and pasted it in the right place in Script.js. Also, verify that your API key is not restricted in a way that prevents it from working.

### Quota Exceeded

If you encounter a "quota exceeded" error, you may need to increase your quota in the Google Cloud Console or optimize your usage to stay within the free tier limits.

### Invalid API Key

Make sure your API key is active and not restricted to a different API or service. Check the Google Cloud Console for any restrictions you might have applied.

### Network Issues

Ensure you have a stable internet connection and that there are no network restrictions blocking access to the YouTube Data API.
