# neshan-maps-mcp

MCP server for Neshan Maps API (Iran). Supports geocoding, reverse geocoding, place search, directions, distance matrix, static maps, and autocomplete. Uses API Key header authentication.

## Tools (8)

| Tool | Description |
|------|-------------|
| `geocode` | Convert address to coordinates |
| `reverse_geocode` | Convert coordinates to address |
| `search_places` | Search places near a location |
| `get_directions` | Get route directions |
| `get_distance_matrix` | Calculate distances between points |
| `get_static_map` | Generate a static map image |
| `suggest` | Autocomplete place suggestions |
| `get_map_tile` | Get a map tile image |

## Quick Start

```json
{
  "mcpServers": {
    "neshan-maps": {
      "command": "npx",
      "args": ["-y", "@theyahia/neshan-maps-mcp"],
      "env": {
        "NESHAN_API_KEY": "<YOUR_API_KEY>"
      }
    }
  }
}
```

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `NESHAN_API_KEY` | Yes | API key from Neshan developer platform |

## Demo Prompts

- "Geocode the address 'Azadi Square, Tehran'"
- "What's at coordinates 35.6892, 51.3890?"
- "Find restaurants near 35.6892, 51.3890"
- "Get driving directions from Tehran to Isfahan"
- "Calculate distance matrix between 3 locations"

## License

MIT
