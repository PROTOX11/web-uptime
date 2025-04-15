"use client"
import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "@clerk/nextjs";
import { getAuth } from "@clerk/nextjs/server";
import { API_BACKEND_URL } from "@/config";
import { stat } from "fs";
export {useUser} from "@clerk/nextjs";

interface Website {
    id: string;
    url: string;
    status: 'up' | 'down';
    aggregatedTicks: {
        id: string;
        createdAt: string;
        status: 'up' | 'down';
        latency: number;
    }[]; 
}

export function useWebsites() {
    const { getToken } = useAuth();
    const [websites, setWebsites] = useState<Website[]>([]);

    async function refreshWebsites() {
        const token = await getToken();
        const response = await axios.get(`${API_BACKEND_URL}/api/v1/websites`, {
            headers: {
                Authorization: token,
            },
        });
        setWebsites(response.data.websites.map((website: any) => ({
            ...website,
            status: website.ticks?.[0]?.status || 'down',
            aggregatedTicks: website.ticks?.map((tick: any) => ({
                status: tick.status,
                timestamp: tick.createdAt,
            })) || [],
    }))
)
    }

    useEffect(() => {
        refreshWebsites();
        const interval = setInterval(() => {
            refreshWebsites();
        }, 1000*60*1);
        return () => clearInterval(interval);    
    }, []);

    return {websites, refreshWebsites};
}