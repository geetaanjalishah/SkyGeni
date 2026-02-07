import { useEffect, useState } from "react";
import { getRecommendations } from "../api/api";
import { Card, CardContent, List, ListItem } from "@mui/material";

export default function Recommendations() {
  const [items, setItems] = useState<string[]>([]);

  useEffect(() => {
    getRecommendations().then((res) => setItems(res.data));
  }, []);

  return (
    <Card>
      <CardContent>
        <div className="recommendation-title">Recommended Action</div>
        <List>
  {items.map((item, i) => (
    <ListItem key={i} className="recommendation-item">
      <span className="recommendation-dot">▲</span>
      <span className="recommendation-text">{item}</span>
    </ListItem>
  ))}
</List>

      </CardContent>
    </Card>
  );
}
